import React from "react";
import { PhotoCard } from "../PhotoCard";
import { useGetPhotos } from "../../hoc/withPhotos";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, data } = useGetPhotos(categoryId);

  if (loading) return "";

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
