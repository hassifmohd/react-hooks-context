import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

//example of context using functional component
const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Book 11", id: 1, author: "Person 1" },
    { title: "Book 22", id: 2, author: "Person 2" },
    { title: "Book 33", id: 3, author: "Person 3" }
  ]);

  //add a new book
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
