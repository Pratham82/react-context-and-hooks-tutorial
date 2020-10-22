import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Booklist = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui }}>Deep work - Cal Newport</li>
        <li style={{ background: theme.ui }}>Ikagai- Hector garcia</li>
        <li style={{ background: theme.ui }}>Grit - Angela Duckworth</li>
        <li style={{ background: theme.ui }}>
          How not to Die - Michael Gregger
        </li>
        <li style={{ background: theme.ui }}>Principles - Ray Dalio</li>
      </ul>
    </div>
  );
};

export default Booklist;
