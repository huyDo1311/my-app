const stateDefault = {
  taiXiu: true,
  mangXucXac: [
    { ma: 1, hinhAnh: "./img/gameXucSac/1.png" },
    { ma: 1, hinhAnh: "./img/gameXucSac/1.png" },
    { ma: 1, hinhAnh: "./img/gameXucSac/1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const GameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      state.taiXiu = action.taiXiu;
      return { ...state };
    case "PLAY_GAME": {

      let mangXucXacNew = [];
      for (let i = 0; i < 3; i++) {
        let numRandom = Math.floor(Math.random() * 6) + 1;
        let XucXacNew = {
          ma: numRandom,
          hinhAnh: `./img/gameXucSac/${numRandom}.png`,
        };
        mangXucXacNew.push(XucXacNew);
      }
      state.mangXucXac = mangXucXacNew;
      state.tongSoBanChoi += 1;
      console.log('mangXucXac', state.mangXucXac);
      let tong3Con = state.mangXucXac.reduce((tongDiem, xucXac, index) => {
        return tongDiem += xucXac.ma;   
      },0)
      console.log("🚀 ~ tongDiem ~ tongDiem:", tong3Con);
      if((tong3Con > 11 && state.taiXiu === true) || (tong3Con <= 11 && this.state.taiXiu === false)) {
        state.soBanThang += 1;
      } 
      // alert(123);
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default GameXucXacReducer;
