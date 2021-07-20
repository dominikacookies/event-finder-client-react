import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import $ from "jquery";

import "./Homepage.css";

import SearchBar from "../../components/SearchBar";
import Events from "../../components/Events";
// import dataQuery from "../../utils/dataQuery";

const Homepage = () => {
  const [cityName, setCityName] = useState();
  const [genre, setGenre] = useState();

  const onSubmit = (event) => {
    event.preventDefault();

    const cityName = document.getElementById("cityName").value;
    const genre = document.getElementById("genre").value;

    if (cityName === "") {
      $(".error-text").remove();
      $(event.target).append(`
      <p class="error-text"> Please enter a city name to search. </p>
      `);
      return;
    }

    setCityName(cityName);
    setGenre(genre);
  };

  const dataQuery = gql`
  query EventQuery {
    events(classificationName: "${genre}", page: 1, city: "${cityName}") {
      name
      url
    }
  }
`;

  const { loading, error, data } = useQuery(dataQuery);

  console.log(data);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center homepage">
      <div>
        <SearchBar onSubmit={onSubmit} />
      </div>
      <div>
        {loading && <h1>Data is loading...</h1>}
        {/* {error && <h1>Error loading data</h1>} */}
        {data && <Events events={data.events} />}
      </div>
    </div>
  );
};

export default Homepage;
