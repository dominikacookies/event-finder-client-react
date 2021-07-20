import { gql } from "@apollo/client";

const dataQuery = gql`
  query EventQuery {
    events(classificationName: "music", page: 1, city: "London") {
      name
      url
    }
  }
`;

// export default dataQuery;
