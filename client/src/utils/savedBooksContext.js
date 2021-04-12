import React from "react";
console.log("user context");
const SavedBooksContext = React.createContext({
  books1: [],
  trigger: "1"
});

export default SavedBooksContext;