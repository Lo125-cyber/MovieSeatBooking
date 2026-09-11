const SeatMap = () => {

    const danhSachGhe =
        ReactRedux.useSelector(
            state => state.danhSachGhe
        );


    return (
        <div className="seat-map">

            <div className="screen">
                MÀN HÌNH
            </div>


            {/* Dãy số cột */}

            <div className="column-number">

                <div className="row-label"></div>

                <div className="seat-list">

                    {Array.from(
                        { length: 12 },
                        (_, index) => (

                            <div
                                className="column-number-item"
                                key={index}
                            >
                                {index + 1}
                            </div>

                        )
                    )}

                </div>

            </div>


            {/* Các hàng ghế */}

            {danhSachGhe
                .filter(item => item.hang !== "")
                .map(hang => (

                    <SeatRow
                        key={hang.hang}
                        hang={hang}
                    />

                ))}

        </div>
    );
};