import { useEffect, useState } from "react";
import { CLOUD_NAME } from "../../constants/CloudinaryConstants";
import { cloudinaryThumbnailUrl } from "../../utils/CloudinaryUtils";
import axios from "axios";
import "./Album.css";

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

export function Album({ tagName }: { tagName: string }) {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${tagName}.json`;
      const response = await axios.get(url);
      setPhotos(response.data.resources);
    }
    loadPhotos();
  }, [tagName]);

  return (
    <div className="album-grid">
      {photos.map(photo => (
        <div className="album-photo-container" key={photo.asset_id}>
          <img
            className="album-photo"
            src={cloudinaryThumbnailUrl(photo.public_id)}
            loading="lazy"
            alt=""
          />
        </div>
      ))}
    </div>
  );
}