import React, {useEffect, useState, Component } from "react";
import API from "../../utils/API";
//import Container from "../Container";
import SearchForm from "../SearchForm";
//import EmployeeTable from "../EmployeeTable";
import UserContext from "../../utils/userContext";
import CardBtn from "../CardBtn";
import Navbar from "../Nav";

function Search() {
//   const [books, setBooks] = useState([]);
//   const [search, setSearch] = useState();


// function handleBtnClick(event) {
//   // Get the title of the clicked button
//   console.log(event);
//   console.log("inside hndlebtn click");
//   API.getGoogleBooks()
//   .then(books => {
//     // store returned list into state variable of employees (this will be static)
//     setBooks(books.data);
//     console.log(books.data.items);
//     setSearch();
//     // also store returned list into state variable of filtered  (this will change over time)
// //        this.setState({ filtered: res.data.results})
//   })
//   .catch(err => console.log(err));
// }
    return (
      // <UserContext.Provider value={{ books, handleBtnClick }}>
      <div className="container-fluid">

          <SearchForm>

          </SearchForm>
      </div>

      // </UserContext.Provider>

    );

}
export default Search;