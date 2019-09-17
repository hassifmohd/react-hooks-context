import React, { createContext, useState } from "react";

export const BookContext = createContext();

//example of context using functional component
const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Book 11", id: 1 },
    { title: "Book 22", id: 2 },
    { title: "Book 33", id: 3 }
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
