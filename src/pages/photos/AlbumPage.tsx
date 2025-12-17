import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { Header } from "../../components/Header";
import { AlbumGrid } from "../../components/photos/AlbumGrid";
import { getAlbumNameFromTagName } from "../../utils/photosUtils";
import type { Photo } from "../../utils/types";
import { CLOUD_NAME } from "../../utils/photosUtils";
import "./AlbumPage.css";

export function AlbumPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const navigate = useNavigate();
  let { tagName } = useParams();
  if (tagName === undefined || tagName == null) {
    tagName = "";
  }

  useEffect(() => {
    const loadPhotos = async () => {
      const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${tagName}.json`;
      const response = await axios.get(url)
        .catch(() => {
          navigate("/404", { replace: true });
        });
      setPhotos(response?.data.resources || []);
    }
    loadPhotos();
  }, [navigate, tagName]);

  const albumName = getAlbumNameFromTagName(tagName);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <title>{albumName}</title>

      <Header />

      {photos.length !== 0 &&
        <>
          <div className="album-page">
            <button
              className="button-primary"
              onClick={() => navigate(-1)}>
              Back
            </button>
            <h1 className="title">{albumName}</h1>
          </div>
          <AlbumGrid photos={photos} />
        </>
      }
    </>
  );
}