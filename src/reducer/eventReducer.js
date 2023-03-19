// src/reducers/eventReducer.js

const initialState = {
    events: JSON.parse(localStorage.getItem("events")) || [],
  };
  
  const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CREATE_EVENT":
        return {
          events: [...state.events, action.payload],
        };
      case "EDIT_EVENT":
        return {
          events: state.events.map((e) => (e.eventId === action.payload.eventId ? action.payload : e)),
        };
      case "DELETE_EVENT":
        return {
          events: state.events.filter((e) => e.eventId !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default eventReducer;
  