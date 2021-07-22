import EventCard from "./EventCard";

const Events = ({ events }) => {
  return (
    <div className="cards-container">
      <div className="d-flex flex-wrap justify-content-between">
        {events
          .map((event) => {
            return <EventCard event={event} />;
          })
          .slice(0, 5)}
      </div>
    </div>
  );
};

export default Events;
