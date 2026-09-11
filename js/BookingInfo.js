const BookingInfo = () => {

    const dispatch = ReactRedux.useDispatch();


    const tenKhachHang =
        ReactRedux.useSelector(
            state => state.tenKhachHang
        );


    const soLuongGhe =
        ReactRedux.useSelector(
            state => state.soLuongGhe
        );


    const danhSachGheDangChon =
        ReactRedux.useSelector(
            state => state.danhSachGheDangChon
        );


    const thongBao =
        ReactRedux.useSelector(
            state => state.thongBao
        );


    const tongTien =
        danhSachGheDangChon.reduce(
            (tong, ghe) => tong + ghe.gia,
            0
        );


    const formatMoney = (money) => {

        return money.toLocaleString("vi-VN") + " đ";

    };


    const handleStart = () => {

    

    if (!tenKhachHang.trim()) {

        alert(
            "Vui lòng nhập họ tên khách hàng."
        );

        return;
    }


    

    if (soLuongGhe <= 0) {

        alert(
            "Vui lòng nhập số lượng ghế."
        );

        return;
    }


    

    dispatch(
        startSelecting()
    );
};


    const handleBooking = () => {

    
    if (!tenKhachHang.trim()) {

        alert(
            "Vui lòng nhập họ tên khách hàng."
        );

        return;
    }


    
    if (soLuongGhe <= 0) {

        alert(
            "Vui lòng nhập số lượng ghế."
        );

        return;
    }


    
    if (danhSachGheDangChon.length === 0) {

        alert(
            "Vui lòng chọn ghế."
        );

        return;
    }


    
    if (
        danhSachGheDangChon.length
        !== soLuongGhe
    ) {

        alert(
            `Bạn đã chọn ${danhSachGheDangChon.length}/${soLuongGhe} ghế. Vui lòng chọn đủ ${soLuongGhe} ghế.`
        );

        return;
    }


    
    dispatch(
        confirmBooking()
    );
};


    return (
        <div className="booking-info">

            <div className="form-title">
                THÔNG TIN ĐẶT VÉ
            </div>


            <div className="form-group">

                <label>
                    Họ tên khách hàng
                </label>

                <input
                    type="text"
                    value={tenKhachHang}
                    onChange={(e) =>
                        dispatch(
                            setCustomerName(
                                e.target.value
                            )
                        )
                    }
                    placeholder="Nhập họ tên..."
                />

            </div>


            <div className="form-group">

                <label>
                    Số lượng ghế
                </label>

                <input
                    type="number"
                    min="1"
                    value={soLuongGhe || ""}
                    onChange={(e) =>
                        dispatch(
                            setNumberOfSeats(
                                e.target.value
                            )
                        )
                    }
                    placeholder="Ví dụ: 2"
                />

            </div>


            <button
                className="start-button"
                onClick={handleStart}
            >
                BẮT ĐẦU CHỌN GHẾ
            </button>


            <div className="legend">

                <div>
                    <span className="legend-box booked"></span>
                    Ghế đã đặt
                </div>

                <div>
                    <span className="legend-box selected"></span>
                    Ghế đang chọn
                </div>

                <div>
                    <span className="legend-box empty"></span>
                    Ghế chưa đặt
                </div>

            </div>


            <h3>
                DANH SÁCH GHẾ BẠN CHỌN
            </h3>


            <table>

                <thead>

                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Xóa</th>
                    </tr>

                </thead>


                <tbody>

                    {danhSachGheDangChon.length === 0 ? (

                        <tr>
                            <td colSpan="3">
                                Chưa chọn ghế
                            </td>
                        </tr>

                    ) : (

                        danhSachGheDangChon.map(ghe => (

                            <tr key={ghe.soGhe}>

                                <td>
                                    {ghe.soGhe}
                                </td>

                                <td>
                                    {formatMoney(ghe.gia)}
                                </td>

                                <td>

                                    <button
                                        className="delete-button"
                                        onClick={() =>
                                            dispatch(
                                                removeSeat(
                                                    ghe.soGhe
                                                )
                                            )
                                        }
                                    >
                                        X
                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>


                <tfoot>

                    <tr>

                        <td colSpan="1">
                            Tổng tiền
                        </td>

                        <td colSpan="2">
                            {formatMoney(tongTien)}
                        </td>

                    </tr>

                </tfoot>

            </table>


            {thongBao && (

                <div className="message">
                    {thongBao}
                </div>

            )}


            <div className="action-buttons">

                <button
                    onClick={() =>
                        dispatch(cancelSelection())
                    }
                    className="cancel-button"
                >
                    HỦY CHỌN
                </button>


                <button
                    onClick={handleBooking}
                    className="booking-button"
                >
                    ĐẶT VÉ
                </button>

            </div>

        </div>
    );
};