import React, { useContext, useState } from "react";
import API from "../../utils/API";
//import Container from "../Container";
// import SearchForm from "../SearchForm";
//import EmployeeTable from "../EmployeeTable";
import UserContext from "../../utils/userContext";
import CardBtn from "../CardBtn";
// import Navbar from "../Nav";
import Project from "../Project";
import JohnTry from "../JohnTry";

function Search() {
   const [books, setBooks] = useState([]);
//   const [searchTerm, setSearchTerm] = useState();
const [searchTerm, setSearchTerm]= useState();
const {book} = useContext(UserContext);

console.log(book);

 function handleBtnClick(event) {
   // Get the title of the clicked button
   event.preventDefault();
   API.getGoogleBooks(searchTerm)
   .then(books => {
     // store returned list into state variable of employees (this will be static)
     setBooks(books.data.items);
     console.log(books.data.items);
     // also store returned list into state variable of filtered  (this will change over time)
 //        this.setState({ filtered: res.data.results})
   })
   .catch(err => console.log(err));
 }
 function term(e) {
  console.log(e.target.value);
   return setSearchTerm(e.target.value)
}
    return (
 <UserContext.Provider value={{books, searchTerm, handleBtnClick}}>
      <div className="container-fluid">
      <form className="searchForm justify-content-center form-inline m-2">
        <input
          value={searchTerm}
          onChange={term}
          name="searchTerm"
          type="text"
          className="form-control form-control-lg"
          placeholder="Search Term"
          // disable the Enter key so a user hitting Enter doesn't accidentally reload the page with new data
          onKeyPress={e => {
            if (e.key === 'Enter') e.preventDefault();
          }}
        />
                    <CardBtn>
              </CardBtn> 
    </form>
            <JohnTry />
      </div>

 </UserContext.Provider>

    );

}
export default Search;