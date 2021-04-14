import React from "react";
console.log("user context");

// context for user saved books to be passed between components
const SavedBooksContext = React.createContext({
  books1: [],
  trigger: "1"
});

export default SavedBooksContext;