import { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { CLOUD_NAME } from "../../utils/photosUtils";
import { cloudinaryThumbnailUrl } from "../../utils/photosUtils";
import "./AlbumMarquee.css";

type Photo = {
  asset_folder: string;
  asset_id: string;
  created_at: string;
  format: string;
  height: number;
  public_id: string;
  type: string;
  version: number;
  width: number;
};

export function AlbumMarquee({ tagName, switchDir }: { tagName: string, switchDir: boolean }) {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${tagName}.json`;
      const response = await axios.get(url);
      setPhotos(response.data.resources.slice(0, 20));
    }
    loadPhotos();
  }, [tagName]);

  return (
    <Marquee
      className="marquee"
      direction={switchDir ? "left" : "right"}
      pauseOnHover={true}
      gradient={true}
      gradientColor="black"
      gradientWidth={300}
    >
      {photos.map((photo) => (
        <div className="marquee-photo-container" key={photo.asset_id}>
          <img
            className="marquee-photo"
            src={cloudinaryThumbnailUrl(photo.public_id)}
            loading="lazy"
            alt=""
          />
        </div>
      ))}
    </Marquee>
  );
}