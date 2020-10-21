import React, { Component } from "react";

class Booklist extends Component {
  state = {};
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>Deep work</li>
          <li>Ikagai</li>
          <li>Grit</li>
          <li>How not to Die</li>
          <li>Principles</li>
        </ul>
      </div>
    );
  }
}

export default Booklist;
