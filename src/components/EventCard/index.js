const EventCard = ({ event }) => {
  console.log(event);
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img className="card-img-top" src={event.images[0].url} alt="event" />
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        <p>Venue: {event.venue} </p>
        <a href={event.url} target="_blank" className="btn btn-primary">
          Book now
        </a>
      </div>
    </div>
  );
};

export default EventCard;
