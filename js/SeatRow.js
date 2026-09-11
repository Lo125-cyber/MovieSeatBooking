const SeatRow = ({ hang }) => {

    return (
        <div className="seat-row">

            <div className="row-label">
                {hang.hang}
            </div>

            <div className="seat-list">

                {hang.danhSachGhe.map(ghe => (

                    <Seat
                        key={ghe.soGhe}
                        ghe={ghe}
                    />

                ))}

            </div>

        </div>
    );
};