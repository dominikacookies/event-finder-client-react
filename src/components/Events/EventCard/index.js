const EventCard = ({ event }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src="..." alt="event" />
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <p>Date: </p>
        <p>Time: </p>
        <p>Venue: </p>
        <a href="#" className="btn btn-primary">
          Book now
        </a>
      </div>
    </div>
  );
};

export default EventCard;
