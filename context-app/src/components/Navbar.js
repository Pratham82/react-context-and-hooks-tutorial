import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

class Navbar extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { dark, light, isLightTheme } = themeContext;
              const theme = isLightTheme ? light : dark;
              const { isAuthenticated, toggleAuth } = authContext;

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
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}
export default Navbar;
