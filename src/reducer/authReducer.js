const initialState = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")),
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
        case "REGISTER_SUCCESS":
            return {
                currentUser: action.payload,
                error: null,
            };
        case "LOGIN_ERROR":
        case "REGISTER_ERROR":
            return {
                currentUser: null,
                error: action.payload,
            };
        case "LOGOUT":
            localStorage.setItem('currentUser', null);
            return {
                currentUser: null,
                error: null,
            };
        case "RESET":
            return initialState
        default:
            return state;
    }
};

export default authReducer;