import { CSSProperties } from "react";
import "./App.css";

function App() {
  const listItemStyle: CSSProperties = {
    padding: "20px 40px",
    border: "2px solid white",
    borderRadius: "20px",
    justifyContent: "center",
    textWrap: "balance",
    textAlign: "justify",
  };
  return (
    <div
      style={{
        maxWidth: "1280px",
      }}
    >
      <h1>Hi, I'm Jason Bell</h1>
      <h2>Full-Stack Software developer</h2>
      <p>
        This portfolio is currently under works 🚧🧱🏗️, but you can check out a
        few of my other projects my projects on my{" "}
        <a href="https://github.com/json-bell/">GitHub</a> or with the links in
        the project descriptions below.
      </p>
      <p>
        I'm currently working as a Front-End Software developer for the
        Manchester Airports Group on their Airport Website Renewal project,
        revamping their 3 Airport Sites (Manchester, East Midlands, and
        Stansted) through a full refreshing of their Content Management System.
        My{" "}
        <a href="https://www.linkedin.com/in/jasonbell-/">LinkedIn profile</a>{" "}
        has more details on this role, and on my background of my Maths Masters
        at Oxford and the intensive 13-week Northcoders Full-Stack training
        course
      </p>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          listStyle: "none",
          gap: "40px",
          padding: "40px 80px",
        }}
      >
        <li style={listItemStyle}>
          <h3>Daily Calendar Puzzle</h3>
          <p>
            A puzzle game with a single grid, but different solutions every day.
            Try to cover the cells to leave only the week-day, date and month of
            the current date! If you're having trouble, then there are Solution
            buttons to help out from whatever position you're already at. Feel
            free to check out the{" "}
            <a href="/daily-calendar-puzzle">deployed version</a> or the{" "}
            <a href="https://github.com/json-bell/calendar-puzzle">
              github portfolio
            </a>
          </p>
        </li>
        <li style={listItemStyle}>
          <h3>Mahjong Score Tracker</h3>
          <p>
            A full-stack Web App that scores hands and tracks hands played in a
            game of Mahjong. This app is made from a Python FastAPI + PostgreSQL
            back-end, and a Typescript React front-end. The front-end is still
            in the works, but the back-end is ready and hosted on Render at{" "}
            <a href="https://mahjong-api.onrender.com">
              mahjong-api.onrender.com
            </a>
            , or you can spin up your own local version by cloning the{" "}
            <a href="https://github.com/json-bell/mahjong-api">
              GitHub Repository
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default App;
