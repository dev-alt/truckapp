import React from "react";
import { Link } from "react-router-dom";
import data from "./data.json";
import { AppBar } from "@mui/material";

function Nav({ data }) {
  return (
    <AppBar sx={{ backgroundColor: "#a81c1c", color: "white" }}>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            padding: 0,
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            height: "100%", // Set height to ensure vertical alignment
          }}
        >
          <li style={{ marginRight: "20px" }}>
            <Link to="/" style={navLinkStyles}>
              Home
            </Link>
          </li>

          {data.map((truck) => (
            <li key={truck.model} style={{ marginRight: "20px" }}>
              <Link to={`/${truck.model}`} style={navLinkStyles}>
                {truck.model}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </AppBar>
  );
}

const navLinkStyles = {
  textDecoration: "none",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
  fontFamily: "Arial, sans-serif",
};

export default Nav;
