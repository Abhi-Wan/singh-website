import { Header } from "../components/Header";
import "./AboutPage.css";

export function AboutPage() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <title>About Me</title>

      <Header />

      <div className="about-page">
        <h1>About page</h1>
        <p>TBD: About page content</p>
      </div>
    </>
  );
}