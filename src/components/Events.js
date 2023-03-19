import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent } from "../actions/eventActions";
import EventForm from "./EventForm";
import EventList from "./EventList";

const Events = () => {
    const [editEvent, setEditEvent] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const events = useSelector((state) => state.event.events);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteEvent(id));
    };

    const handleEdit = (event) => {
        setEditEvent(event);
        setShowForm(true);
    };

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        })
    }

    return (
        <div>
            <div className="d-flex">
                <button className="form-control" onClick={() => setShowForm(!showForm)}>Create Event</button>
                <button className="form-control" onClick={handleLogout}>Logout</button>
            </div>
            <EventForm
                showForm={showForm}
                setEditEvent={setEditEvent}
                currentSelectedEvent={editEvent}
                handleClose={() => setShowForm(!showForm)} />

            <EventList events={events} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
    );
};

export default Events;