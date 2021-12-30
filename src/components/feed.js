import { useState, useEffect } from "react";
import { imageFetch } from "../utils";

export const Feed = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    imageFetch(setImages);
  }, []);

  return (
    <div>
      {images.map((item, index) => {
        return <img key={index} alt="random photo" src={item.download_url} />;
      })}
    </div>
  );
};