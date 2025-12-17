import { NavLink } from "react-router";
import { Header } from "../../components/Header";
import { AlbumMarquee } from "../../components/photos/AlbumMarquee";
import "./PhotosPage.css";

export function PhotosPage() {

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <title>Photography</title>

      <Header />

      <div className="photos-page">
        <h1>Photography</h1>
      </div>

      <div>
        <h2 className="album-title">Test Tag 1</h2>
        <NavLink to="/photos/testTag1" >
          <AlbumMarquee switchDir={false} tagName="testTag1" />
        </NavLink>

        <h2 className="album-title">Test Tag 2</h2>
        <NavLink to="/photos/testTag2">
          <AlbumMarquee switchDir={true} tagName="testTag2" />
        </NavLink>
      </div>
    </>
  );
}