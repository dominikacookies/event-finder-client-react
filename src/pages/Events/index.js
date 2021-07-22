import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";

import EventCard from "../../components/EventCard";

const Events = () => {
  // const [load, setLoading] = useState(false);
  // const [err, setError] = useState(null);
  // const [eventData, setEventData] = useState(null);
  // const [page, setPage] = useState(1);

  const GetEvents = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cityName = urlParams.get("cityName");
    const genre = urlParams.get("genre");

    const dataQuery = gql`
      query Query {
        events(classificationName: "${genre}", page: 1, city: "${cityName}") {
          name
          url
          date
          time
          venue
          images {
            url
          }
        }
      }`;

    return useQuery(dataQuery);
  };

  const { loading, error, data } = GetEvents();

  console.log(data);

  return (
    <div>
      <h1> Events </h1>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {loading && <h1>Data is loading...</h1>}
        {error && <h1>Error loading data</h1>}
        {data &&
          data.events.map((event) => {
            return <EventCard event={event} />;
          })}
      </div>
    </div>
  );
};

export default Events;
