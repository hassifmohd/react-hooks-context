import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  //by using useContext(...) we can simplify the code
  //but useContext(...) can only work inside functional component, not class component
  //there is a way to use class component but it is not straight forward
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const { books } = useContext(BookContext);

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Reading list</h1>
      <p>Total: {books.length} book(s) to read</p>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
