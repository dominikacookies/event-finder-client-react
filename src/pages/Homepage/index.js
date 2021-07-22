import { useQuery, gql } from "@apollo/client";
import $ from "jquery";

import "./Homepage.css";

import SearchBar from "../../components/SearchBar";
// import dataQuery from "../../utils/dataQuery";

const Homepage = () => {
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

    window.location.assign(`/events?genre=${genre}&cityName=${cityName}`);
  };

  return (
    <div className="homepage">
      <div className="center-div">
        <SearchBar onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Homepage;
