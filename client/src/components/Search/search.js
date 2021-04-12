import React, { useContext, useState } from "react";
import API from "../../utils/API";
import UserContext from "../../utils/userContext";
import CardBtn from "../CardBtn";
import SearchResults from "../SearchResults";

function Search() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm]= useState();
    const {book} = useContext(UserContext);

    console.log(book);

    function handleBtnClick(event) {
       // Get the title of the clicked button
       event.preventDefault();
       API.getGoogleBooks(searchTerm)
        .then(books => {
           // store returned list into state variable of books (this will be static)
           setBooks(books.data.items);
           console.log(books.data.items);
         })
       .catch(err => console.log(err));
    }

    function whichSearchTerm(e) {
      console.log(e.target.value);
      return setSearchTerm(e.target.value)
    }

    return (
        <UserContext.Provider value={{books, searchTerm, handleBtnClick}}>
          <div className="container-fluid">
            <form className="searchForm justify-content-center form-inline m-2">
              <input
                value={searchTerm}
                onChange={whichSearchTerm}
                name="searchTerm"
                type="text"
                className="form-control form-control-lg"
                placeholder="Search Term"
                // disable the Enter key so a user hitting Enter doesn't accidentally reload the page with new data
                onKeyPress={e => {
                if (e.key === 'Enter') e.preventDefault();
                }}
              />
              <CardBtn /> 
            </form>
            <SearchResults />
          </div>
        </UserContext.Provider>
    );
}

export default Search;