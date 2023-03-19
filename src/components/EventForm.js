import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createEvent, editEvent } from "../actions/eventActions";
import { Button, Modal } from "react-bootstrap";

const EventForm = ({ currentSelectedEvent, setEditEvent, showForm, handleClose }) => {
    const [name, setName] = useState("" || currentSelectedEvent?.name);
    const [date, setDate] = useState("" || currentSelectedEvent?.date);
    const [description, setDescription] = useState("" || currentSelectedEvent?.description);
    const [price, setPrice] = useState("" || currentSelectedEvent?.price);
    const [bookingType, setBookingType] = useState("normal" || currentSelectedEvent?.bookingType);
    const [termsAccepted, setTermsAccepted] = useState(false || currentSelectedEvent?.termsAccepted);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentSelectedEvent) {
            setName(currentSelectedEvent.name);
            setDate(currentSelectedEvent.date);
            setDescription(currentSelectedEvent.description);
            setPrice(currentSelectedEvent.price);
            setBookingType(currentSelectedEvent.bookingType);
            setTermsAccepted(currentSelectedEvent.termsAccepted);
        }
    }, [currentSelectedEvent])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = { name, date, description, price, bookingType, termsAccepted };
        if (currentSelectedEvent?.eventId) {
            dispatch(editEvent(currentSelectedEvent.eventId, newEvent));
        } else {
            dispatch(createEvent(newEvent));
        }
        setName("");
        setDate("");
        setDescription("");
        setPrice("");
        setBookingType("normal");
        setTermsAccepted(false);
        setEditEvent(null);
        handleClose();
    };

    return (
        <Modal show={showForm} onHide={handleClose}>
            <form className="create-event" onSubmit={handleSubmit}>
                <Modal.Header closeButton={false}>
                    <Modal.Title>Create Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Event Name:</label>
                    <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                    <label>Event Date:</label>
                    <input className="form-control" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

                    <label>Event Description:</label>
                    <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />

                    <label>Base Price:</label>
                    <input className="form-control" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    <div className="row">
                        <label className="col-4">Premium Booking:</label>
                        <input className="form-control radio col-2" type="radio" name="bookingType" value="premium" checked={bookingType === "premium"} onChange={(e) => setBookingType(e.target.value)} />
                    </div>
                    <div className="row">
                        <label className="col-4">Normal Booking:</label>
                        <input className="form-control radio col-2" type="radio" name="bookingType" value="normal" checked={bookingType === "normal"} onChange={(e) => setBookingType(e.target.value)} />
                    </div>
                    <label className="row radiobox">
                        <input className="form-control col-2" type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} required />
                        <div className="col-8">I accept the terms and conditions</div>
                    </label>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        className="form-control"
                        type="submit">{currentSelectedEvent?.eventId ? "Update Event" : "Create Event"}</Button>
                </Modal.Footer>
            </form>
        </Modal>


    );
};


export default EventForm;
