import { useSelector } from "react-redux";

const EventList = ({ events, onDelete, onEdit }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const validEvents = events?.filter((x) => x.userId === currentUser.userId)
  let content = <h3 className="no-content">No event is created by you. Please create an event</h3>;
  if (validEvents.length) {
    content = (<>
      <ol>
        {validEvents.map((event) => (
          <li key={event.eventId}>
            <h3>{event.name} {event.bookingType !== "normal" && (<>&#9733;</>)}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
            <p>{event.price}</p>
            <div className="row d-flex justify-content-center">
              <button className="form-control edit" onClick={() => onDelete(event.eventId)}>&#10006;</button>
              <button className="form-control edit" onClick={() => onEdit(event)}>🖉</button>
            </div>
          </li>
        ))}
      </ol>
      <div className="base-price">Base price total: {validEvents.reduce((acc, cv) => acc + cv.price * 1, 0)}</div>
    </>);
  }
  return (<div className="event-list">
    {content}
  </div>
  );
};

export default EventList;