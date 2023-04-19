"use client";
import React from "react";
import ImageGallery from "react-image-gallery";

interface IImages {
  url: string;
}

function Gallery({ images = [] }: { images: IImages[] }) {
  return (
    <ImageGallery
      items={images.map(({ url }) => ({
        original: url,
        thumbnail: url,
        loading: "lazy",
      }))}
      showPlayButton={false}
      lazyLoad
    />
  );
}

export { Gallery };
