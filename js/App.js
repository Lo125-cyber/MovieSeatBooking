const App = () => {

    const dispatch = ReactRedux.useDispatch();


    React.useEffect(() => {

        fetch("./danhSachGhe.json")

            .then(response => {

                if (!response.ok) {
                    throw new Error(
                        "Không thể đọc file danhSachGhe.json"
                    );
                }

                return response.json();

            })

            .then(data => {

                dispatch(
                    setSeatData(data)
                );

            })

            .catch(error => {

                console.error(error);

            });

    }, [dispatch]);


    return (
        <div className="bookingMovie">

            <header className="header">

                <h1>
                    ĐẶT VÉ XEM PHIM
                </h1>

                <p>
                    MOVIE SEAT BOOKING
                </p>

            </header>


            <main className="container">

                <section className="left-column">

                    <h2>
                        CHỌN GHẾ
                    </h2>

                    <SeatMap />

                </section>


                <section className="right-column">

                    <BookingInfo />

                </section>

            </main>


            <footer>

                <p>
                    NGUYEN PHUC HUU THANH - BT BUOI 29
                </p>

            </footer>

        </div>
    );
};


const root =
    ReactDOM.createRoot(
        document.getElementById("root")
    );


root.render(

    <ReactRedux.Provider store={store}>

        <App />

    </ReactRedux.Provider>

);