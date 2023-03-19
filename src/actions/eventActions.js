export const createEvent = (event) => {
    return (dispatch) => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const events = JSON.parse(localStorage.getItem("events")) || [];
        const newEvent = {
            ...event,
            userId: currentUser.userId,
            eventId: new Date().getTime()
        };
        events.push(newEvent);
      localStorage.setItem("events", JSON.stringify(events));
      dispatch({ type: "CREATE_EVENT", payload: newEvent });
    };
  };
  
  export const editEvent = (Eventid, event) => {
    return (dispatch) => {
      const events = JSON.parse(localStorage.getItem("events")) || [];
      const index = events.findIndex((e) => e.eventId === Eventid);
      if (index !== -1) {
        const updatedEvent = { ...events[index], ...event };
        events.splice(index, 1, updatedEvent);
        localStorage.setItem("events", JSON.stringify(events));
        dispatch({ type: "EDIT_EVENT", payload: updatedEvent });
      }
    };
  };
  
  export const deleteEvent = (eventId) => {
    return (dispatch) => {
      const events = JSON.parse(localStorage.getItem("events")) || [];
      const index = events.findIndex((e) => e.eventId === eventId);
      if (index !== -1) {
        events.splice(index, 1);
        localStorage.setItem("events", JSON.stringify(events));
        dispatch({ type: "DELETE_EVENT", payload: eventId });
      }
    };
  };