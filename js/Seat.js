const Seat = ({ ghe }) => {

    const dispatch =
        ReactRedux.useDispatch();


    const danhSachGheDangChon =
        ReactRedux.useSelector(
            state =>
                state.danhSachGheDangChon
        );


    const tenKhachHang =
        ReactRedux.useSelector(
            state =>
                state.tenKhachHang
        );


    const soLuongGhe =
        ReactRedux.useSelector(
            state =>
                state.soLuongGhe
        );


    

    const isSelected =
        danhSachGheDangChon.some(
            item =>
                item.soGhe === ghe.soGhe
        );


    const handleClick = () => {


        

        if (!tenKhachHang.trim()) {

            alert(
                "Vui lòng nhập họ tên khách hàng trước."
            );

            return;
        }


        

        if (soLuongGhe <= 0) {

            alert(
                "Vui lòng nhập số lượng ghế trước."
            );

            return;
        }


        

        if (ghe.daDat) {

            return;
        }


       

        dispatch(
            toggleSeat(ghe)
        );
    };


    let className = "seat";


    if (ghe.daDat) {

        className += " seat-booked";

    }
    else if (isSelected) {

        className += " seat-selected";

    }
    else {

        className += " seat-empty";
    }


    return (

        <button
            className={className}
            onClick={handleClick}

            

            disabled={ghe.daDat}
        >

            {ghe.soGhe}

        </button>
    );
};