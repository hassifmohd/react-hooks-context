import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(title, author); //peek into the data

    //change add book from using function, into redux dispatch
    // addBook(title, author);
    dispatch({
      type: "ADD_BOOK",
      book: { title, author }
    });
    setTitle("");
    setAuthor("");
  };

  return (
    <div
      className="form-block"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="book title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="book author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required
        />
        <input type="submit" value="add book" />
      </form>
    </div>
  );
};

export default BookForm;
