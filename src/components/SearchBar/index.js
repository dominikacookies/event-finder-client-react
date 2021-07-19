const SearchBar = () => {
  return (
    <div>
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInputGrid"
              placeholder="name@example.com"
            />
            <label for="floatingInputGrid">Email address</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label for="floatingSelectGrid">Works with selects</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
