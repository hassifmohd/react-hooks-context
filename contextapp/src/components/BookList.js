import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  //example of using Context Provider, another example is Context Consumer
  //advantage: easy to code
  //cons: can only use in class component
  static contextType = ThemeContext;
  state = {};
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Book 1</li>
          <li style={{ background: theme.ui }}>Book 2</li>
          <li style={{ background: theme.ui }}>Book 3</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
