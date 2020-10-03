import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export function useGetPhoto(id) {
  const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
      photo(id: $id) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id,
    },
  });

  return { data, loading, error };
}
