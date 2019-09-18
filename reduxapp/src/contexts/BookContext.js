import React, { createContext, useReducer } from "react";
import BookReducer from "../reducers/BookReducer";

export const BookContext = createContext();

//example of context using functional component
const BookContextProvider = props => {
  const [books, dispatch] = useReducer(BookReducer, [
    { title: "Book 11", id: 1, author: "Person 1" },
    { title: "Book 22", id: 2, author: "Person 2" },
    { title: "Book 33", id: 3, author: "Person 3" }
  ]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
