import { gql } from "@apollo/client";

const dataQuery = gql`
  query DashboardQuery {
    followers(username: "leefarnell") {
      username
      profileImageUrl
      githubUrl
    }
    user(username: "leefarnell") {
      username
      bio
      name
      githubUrl
      profileImageUrl
      followers
      following
      company
      email
      twitterUsername
      publicGists
      publicRepos
    }
  }
`;

export default dataQuery;
