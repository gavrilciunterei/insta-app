import React from "react";
import { PhotoCard } from "../PhotoCard";
import { useGetPhotos } from "../../hoc/withPhotos";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, data, error } = useGetPhotos(categoryId);

  if (loading) return <p>Cargando!</p>;
  if (error) return <p>Error!</p>;

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
