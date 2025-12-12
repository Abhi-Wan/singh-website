import { Header } from "../components/Header";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <title>Abhinav Singh</title>

      <Header />

      <div className="home-page">
        <h1>Home page</h1>
        <p>TBD: Home page content</p>
      </div>
    </>
  );
}