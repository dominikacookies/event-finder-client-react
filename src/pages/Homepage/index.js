import "./Homepage.css";
import SearchBar from "../../components/SearchBar";

const Homepage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center homepage">
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Homepage;
