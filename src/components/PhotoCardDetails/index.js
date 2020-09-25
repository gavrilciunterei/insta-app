import React from "react";
import { PhotoCard } from "../PhotoCard";
import { useGetPhoto } from "../../hoc/PhotoCardWithQuery";

export const PhotoCardDetails = ({ id }) => {
  const { data, loading, error } = useGetPhoto(id);
  if (loading) return "Cargando...";
  return <PhotoCard {...data.photo} />;
};
