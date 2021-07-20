import { useQuery } from "@apollo/client";
import "./Homepage.css";
import SearchBar from "../../components/SearchBar";
import dataQuery from "../../utils/dataQuery";

const Homepage = () => {
  const { loading, error, data } = useQuery(dataQuery);

  return (
    <div className="d-flex justify-content-center align-items-center homepage">
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Homepage;
