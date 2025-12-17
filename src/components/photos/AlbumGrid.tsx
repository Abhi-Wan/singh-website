import type { Photo } from "../../utils/types";
import { cloudinaryThumbnailUrl } from "../../utils/photosUtils";
import "./AlbumGrid.css";

export function AlbumGrid({ photos }: { photos: Photo[] }) {
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