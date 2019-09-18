import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext); //importing books context

  //if there is no books, display other interface
  return books.length ? (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <b>Books</b>
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div
      className="empty"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      You got no books to read
    </div>
  );
};

export default BookList;
