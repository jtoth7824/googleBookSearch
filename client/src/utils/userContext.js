import React from "react";
console.log("user context");
const UserContext = React.createContext({
  searchTerm: "",
  books: [],

  handleBtnClick: () => {}
});

export default UserContext;
