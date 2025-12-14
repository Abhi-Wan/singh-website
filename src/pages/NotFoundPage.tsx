import { Header } from "../components/Header";
import "./NotFoundPage.css";

export function NotFoundPage() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <title>Page Not Found</title>

      <Header />
      <div className="not-found-page">
        <h1>Error 404: Page Not Found</h1>
      </div>
    </>
  );
}