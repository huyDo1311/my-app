const stateGioHang = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      hinhAnh: "./img/vsphone.jpg",
      soLuong: 1,
      gia: 5700000,
    },
  ],
};

const GioHangReducer = (state = stateGioHang, action) => {
  console.log("action :>> ", action);
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let index = state.gioHang.findIndex(
        (spGH) => spGH.maSP === action.spGioHang.maSP,
      );

      if (index !== -1) {
        state.gioHang[index].soLuong += 1;
      } else {
        state.gioHang.push(action.spGioHang);
      }
      //set state.gioHang
      state.gioHang = [...state.gioHang];
      //return new state
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);

      if (index !== -1) {
        gioHangCapNhat.splice(index, 1);
      }

      state.gioHang = gioHangCapNhat;

      return { ...state };
    }
    case "TANG_GIAM_SO_LUONG": {
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);

      if (index !== -1) {
        if (action.tangGiam) {
          gioHangCapNhat[index].soLuong += 1;
        } else {
          if (gioHangCapNhat[index].soLuong > 1) {
            gioHangCapNhat[index].soLuong -= 1;
          } else {
            alert("Số lượng tối thiểu là 1 ");
          }
        }
      }

      state.gioHang = gioHangCapNhat;

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default GioHangReducer;

