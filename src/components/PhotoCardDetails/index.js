import React from "react";
import { PhotoCard } from "../PhotoCard";
import { useGetPhoto } from "../../hoc/PhotoCardWithQuery";

export const PhotoCardDetails = ({ id }) => {
  const { data, loading, error } = useGetPhoto(id);
  if (loading) return <p>Cargando!</p>;
  if (error) return <p>Error!</p>;
  return <PhotoCard {...data.photo} />;
};
