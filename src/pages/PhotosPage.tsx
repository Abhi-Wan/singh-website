import { Header } from "../components/Header";
import { Album } from "../components/photos/Album";
import "./PhotosPage.css";

export function PhotosPage() {

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <title>Photography</title>

      <Header />

      <div className="photos-page">
        <h1 className="title">Photography</h1>
      </div>

      <h2 className="album-title">Test Tag 1</h2>
      <Album tagName="testTag1" />
      <h2 className="album-title">Test Tag 2</h2>
      <Album tagName="testTag2" />
    </>
  );
}