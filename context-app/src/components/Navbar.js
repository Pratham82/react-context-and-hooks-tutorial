import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Reading List</h1>
      <div>
        {" "}
        <h2 onClick={toggleAuth}>
          User {isAuthenticated ? "Logged IN" : "Logged OUT"}
        </h2>
        <button onClick={toggleAuth}>
          {" "}
          {isAuthenticated ? "Log Out" : "Log In"}
        </button>{" "}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
