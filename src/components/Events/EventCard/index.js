const EventCard = ({ event }) => {
  console.log(event.name);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src="..." alt="event" />
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default EventCard;
