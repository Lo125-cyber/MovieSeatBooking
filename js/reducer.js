const initialState = {

    
    danhSachGhe: [],

    
    tenKhachHang: "",

    
    soLuongGhe: 0,

    
    danhSachGheDangChon: [],

    
    dangChonGhe: false,

    
    thongBao: ""
};


const rootReducer = (
    state = initialState,
    action
) => {

    switch (action.type) {


        

        case SET_SEAT_DATA: {

            const danhSachGheMoi =
                action.payload.map(hang => {

                    return {
                        ...hang,

                        danhSachGhe:
                            hang.danhSachGhe.map(ghe => {

                               

                                if (
                                    ghe.soGhe === "A11" ||
                                    ghe.soGhe === "A12"
                                ) {

                                    return {
                                        ...ghe,

                                        daDat: false,

                                        gia: 75000
                                    };
                                }

                                return ghe;
                            })
                    };
                });


            return {
                ...state,

                danhSachGhe: danhSachGheMoi
            };
        }


        

        case SET_CUSTOMER_NAME:

            return {
                ...state,

                tenKhachHang: action.payload,

                thongBao: ""
            };


        

        case SET_NUMBER_OF_SEATS:

            return {
                ...state,

                soLuongGhe:
                    Number(action.payload),

                thongBao: ""
            };


        

        case START_SELECTING:

            return {
                ...state,

                dangChonGhe: true,

                thongBao:
                    "Vui lòng chọn ghế."
            };


        

        case TOGGLE_SEAT: {

            const seat = action.payload;


            

            if (!state.tenKhachHang.trim()) {

                return {
                    ...state,

                    thongBao:
                        "Vui lòng nhập họ tên khách hàng trước."
                };
            }


           

            if (state.soLuongGhe <= 0) {

                return {
                    ...state,

                    thongBao:
                        "Vui lòng nhập số lượng ghế trước."
                };
            }


            

            if (seat.daDat) {

                return {
                    ...state,

                    thongBao:
                        "Ghế này đã được đặt."
                };
            }


            

            const daTonTai =
                state.danhSachGheDangChon.some(
                    item =>
                        item.soGhe === seat.soGhe
                );


            

            if (daTonTai) {

                return {
                    ...state,

                    danhSachGheDangChon:
                        state.danhSachGheDangChon.filter(
                            item =>
                                item.soGhe !== seat.soGhe
                        ),

                    thongBao: ""
                };
            }


            

            if (
                state.danhSachGheDangChon.length
                >= state.soLuongGhe
            ) {

                return {
                    ...state,

                    thongBao:
                        `Bạn chỉ được chọn ${state.soLuongGhe} ghế.`
                };
            }


            

            return {

                ...state,

                danhSachGheDangChon: [

                    ...state.danhSachGheDangChon,

                    seat
                ],

                thongBao: ""
            };
        }


       

        case REMOVE_SEAT:

            return {

                ...state,

                danhSachGheDangChon:
                    state.danhSachGheDangChon.filter(
                        item =>
                            item.soGhe !== action.payload
                    ),

                thongBao: ""
            };


        

        case CANCEL_SELECTION:

            return {

                ...state,

                danhSachGheDangChon: [],

                thongBao:
                    "Đã hủy các ghế đang chọn."
            };


        

        case CONFIRM_BOOKING: {

            

            if (!state.tenKhachHang.trim()) {

                return {

                    ...state,

                    thongBao:
                        "Vui lòng nhập họ tên khách hàng."
                };
            }


            

            if (state.soLuongGhe <= 0) {

                return {

                    ...state,

                    thongBao:
                        "Vui lòng nhập số lượng ghế."
                };
            }


            

            if (
                state.danhSachGheDangChon.length
                === 0
            ) {

                return {

                    ...state,

                    thongBao:
                        "Vui lòng chọn ghế."
                };
            }


            

            if (
                state.danhSachGheDangChon.length
                < state.soLuongGhe
            ) {

                return {

                    ...state,

                    thongBao:
                        `Bạn đã chọn ${state.danhSachGheDangChon.length}/${state.soLuongGhe} ghế. Vui lòng chọn đủ ${state.soLuongGhe} ghế.`
                };
            }


            

            const danhSachGheMoi =
                state.danhSachGhe.map(hang => {

                    return {

                        ...hang,

                        danhSachGhe:
                            hang.danhSachGhe.map(ghe => {

                                const isSelected =
                                    state.danhSachGheDangChon.some(
                                        item =>
                                            item.soGhe ===
                                            ghe.soGhe
                                    );


                                if (isSelected) {

                                    return {

                                        ...ghe,

                                        daDat: true
                                    };
                                }


                                return ghe;
                            })
                    };
                });


            

            return {

                ...state,

                danhSachGhe:
                    danhSachGheMoi,

                danhSachGheDangChon: [],

                thongBao:
                    `Đặt vé thành công cho ${state.tenKhachHang}!`
            };
        }


        

        case RESET_BOOKING:

            return initialState;


        default:

            return state;
    }
};