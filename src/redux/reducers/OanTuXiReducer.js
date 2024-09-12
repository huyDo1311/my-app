const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/OanTuXi/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/OanTuXi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/OanTuXi/bao.png", datCuoc: false },
  ],
  ketQua: "I'm Iron Man",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/OanTuXi/keo.png" },
};

const OanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      //reset mang
      let mangDatCuocUpdate = [...state.mangDatCuoc];
      mangDatCuocUpdate = mangDatCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });

      state.mangDatCuoc = mangDatCuocUpdate;
      return { ...state };
    }
    case "RAN_DOM": {
      let randomNum = Math.floor(Math.random() * 3);
      let raQuan = state.mangDatCuoc[randomNum];
      state.computer = raQuan;

      return { ...state };
    }
    case "END_GAME": {

      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hoà nhau !!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua";
          } else {
            state.ketQua = "Thắng";
            state.soBanThang += 1;
          }
          break;

        case "bua":
          if (computer.ma === "keo") {
            state.ketQua = "Thắng";
            state.soBanThang += 1;
          } else if (computer.ma === "bua") {
            state.ketQua = "Hoà";
          } else {
            state.ketQua = "Thua";
          }
          break;

        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "Thua";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thắng";
            state.soBanThang +=1;
          } else {
            state.ketQua = "Hoà";
          }
          break;

        default:
          state.ketQua = "Iron man";
          return { ...state };
      }
      state.soBanChoi += 1;
      return { ...state };
    }
    default: return { ...state };
  }
};

export default OanTuXiReducer;
