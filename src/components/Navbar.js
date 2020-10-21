import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends React.Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    const { dark, light, isLightTheme } = this.context;
    const theme = isLightTheme ? light : dark;
    console.log(theme);

    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Reading List</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
