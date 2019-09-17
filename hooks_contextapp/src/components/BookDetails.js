import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <li style={{ background: theme.ui }} onClick={() => removeBook(book.id)}>
      {book.title} ({book.author})
    </li>
  );
};

export default BookDetails;
