const SET_SEAT_DATA = "SET_SEAT_DATA";

const SET_CUSTOMER_NAME = "SET_CUSTOMER_NAME";

const SET_NUMBER_OF_SEATS = "SET_NUMBER_OF_SEATS";

const START_SELECTING = "START_SELECTING";

const TOGGLE_SEAT = "TOGGLE_SEAT";

const REMOVE_SEAT = "REMOVE_SEAT";

const CANCEL_SELECTION = "CANCEL_SELECTION";

const CONFIRM_BOOKING = "CONFIRM_BOOKING";

const RESET_BOOKING = "RESET_BOOKING";




const setSeatData = (data) => {
    return {
        type: SET_SEAT_DATA,
        payload: data
    };
};


const setCustomerName = (name) => {
    return {
        type: SET_CUSTOMER_NAME,
        payload: name
    };
};


const setNumberOfSeats = (number) => {
    return {
        type: SET_NUMBER_OF_SEATS,
        payload: number
    };
};


const startSelecting = () => {
    return {
        type: START_SELECTING
    };
};


const toggleSeat = (seat) => {
    return {
        type: TOGGLE_SEAT,
        payload: seat
    };
};


const removeSeat = (seatNumber) => {
    return {
        type: REMOVE_SEAT,
        payload: seatNumber
    };
};


const cancelSelection = () => {
    return {
        type: CANCEL_SELECTION
    };
};


const confirmBooking = () => {
    return {
        type: CONFIRM_BOOKING
    };
};


const resetBooking = () => {
    return {
        type: RESET_BOOKING
    };
};