import React, { useContext } from "react";
import "./Card.css";
import { themeContext } from "../../Context";

const Card = ({ emoji, heading, detail, color }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="card"
      style={{
        borderColor: { color },
        background: !darkMode
          ? "rgba(255, 255, 255, 0.26)"
          : "rgba(255, 255, 255, 0.95)",
      }}
    >
      <img src={emoji} alt="" />
      <span style={{ color: darkMode && "black" }}>{heading}</span>
      <span style={{ color: darkMode && "black" }}>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
