import { useState } from "react";

const SearchBar = () => {
  const [cityName, setCityName] = useState();
  const [genre, setGenre] = useState();

  const onSubmit = (event) => {
    event.preventDefault();

    const cityName = document.getElementById("cityName").value;
    const genre = document.getElementById("genre").value;

    setCityName(cityName);
    setGenre(genre);
  };

  return (
    <form onSubmit={onSubmit}>
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <input
              type="input"
              class="form-control"
              id="cityName"
              placeholder="City"
            />
            <label for="floatingInputGrid">Enter a city...</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <select
              class="form-select"
              id="genre"
              aria-label="Floating label select example"
            >
              <option value="Music">Music</option>
              <option value="Sport">Sports</option>
              <option value="Family">Family</option>
              <option value="Theatre">Theatre</option>
              <option value="Comedy">Comedy</option>
            </select>
            <label for="floatingSelectGrid">Event Type</label>
          </div>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
