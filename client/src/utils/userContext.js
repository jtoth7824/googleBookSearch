import React from "react";
console.log("user context");

// context for searchTerm and books to be passed between components
const UserContext = React.createContext({
  searchTerm: "",
  books: [],

  handleBtnClick: () => {}
});

export default UserContext;
