import ResumePDF from "../assets/docs/SDE Resume - Abhinav Singh.pdf";
import "./Resume.css";

export function Resume() {
  return (
    <div className="resume">
      <embed src={ResumePDF} width="1000px" height="1150px" />
    </div>
  );
}