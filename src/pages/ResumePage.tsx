import { Header } from "../components/Header";
import { Resume } from "../components/Resume";
import "./ResumePage.css";

export function ResumePage() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <title>Resume</title>

      <Header />
      <h1 className="title">Software Developer Resume</h1>
      <Resume />
    </>
  );
}