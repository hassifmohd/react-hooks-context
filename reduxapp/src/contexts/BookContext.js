import React, { createContext, useReducer, useEffect } from "react";
import BookReducer from "../reducers/BookReducer";

export const BookContext = createContext();

//example of context using functional component
const BookContextProvider = props => {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    //the 3rd parameter is the default value if 2nd parameter is blank
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  //when there is changes in books, we mirror into localstorage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
