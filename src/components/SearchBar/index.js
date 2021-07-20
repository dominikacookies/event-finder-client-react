const SearchBar = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="row g-2">
        <div className="col-md">
          <div className="form-floating">
            <input
              type="input"
              className="form-control"
              id="cityName"
              placeholder="City"
            />
            <label for="floatingInputGrid">Enter a city...</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <select
              className="form-select"
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
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
