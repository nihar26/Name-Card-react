import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skillList = [
  {
    name: "Javascript",
    Level: "Intermediate",
    color: "grey",
  },
  {
    name: "Node.js",
    Level: "Intermediate",
    color: "Orange",
  },
  {
    name: "React",
    Level: "begginers",
    color: "seagreen",
  },
  {
    name: "XSLT",
    Level: "Intermediate",
    color: "yellow",
  },
  {
    name: "MarkLogic",
    Level: "begginers",
    color: "pink",
  },
  {
    name: "Html/css",
    Level: "Intermediate",
    color: "red",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skilllist />
        <Projects />
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
      {skillList.map((skill) => (
        <Skill name={skill.name} color={skill.color} Level={skill.Level} />
      ))}
      {/* <Skill name="Javascript" emoji="💪" color="grey" />
      <Skill name="Node.js" emoji="💪" color="orange" />
      <Skill name="React" emoji="💪" color="MediumSeaGreen" />
      <Skill name="XSLT" emoji="💪" color="yellow" />
      <Skill name="Marklogic" emoji="💪" color="pink" /> */}
    </div>
  );
}

function Skill({ name, color, Level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>
        {Level === "begginers" && "👶"}
        {Level === "Intermediate" && "💪"}
      </span>
    </div>
  );
}

function Projects() {
  return (
    <>
      <div style={{ "padding-top": "24px" }}>
        <p>PROJECTS</p>
      </div>
      <div className="projcet-list">
        <Project
          link="https://github.com/nihar26/shopingCartManagement"
          name="Shopping Cart"
        />
        <Project
          link="https://github.com/nihar26/protofilio"
          name="Portfolio"
        />
        <Project
          link="https://github.com/nihar26/eventSchedular"
          name="Event Handler"
        />
        <Project
          link="https://github.com/nihar26/PizzaMenu-React"
          name="Pizza Menu"
        />
      </div>
    </>
  );
}

function Project({ link, name }) {
  return (
    <div className="project">
      <a href={link}>{name}</a>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
