import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skilllist />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="n.jpg" alt="n.jpg" />;
}

function Intro() {
  return (
    <card>
      <h1>Nihar Sayyed</h1>
      <p>
        Full stack developer at datavid when not on project love to learn new
        tech and earn certification.
      </p>
    </card>
  );
}

function Skilllist() {
  return (
    <div className="skill-list">
      <Skill name="Javascript" emoji="💪" color="grey" />
      <Skill name="Node.js" emoji="💪" color="orange" />
      <Skill name="React" emoji="💪" color="MediumSeaGreen" />
      <Skill name="XSLT" emoji="💪" color="yellow" />
      <Skill name="Marklogic" emoji="💪" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
