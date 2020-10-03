import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export function useToggleLikeMutation(id) {
  const [toggleLikePhoto] = useMutation(LIKE_PHOTO, {
    variables: { input: { id } },
  });
  return { toggleLikePhoto };
}
