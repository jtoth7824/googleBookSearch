import React, {useState, useContext} from "react";
import API from "../../utils/API";
import CardBtn from "../CardBtn";
import UserContext from "../../utils/userContext";
// Sets up the parameters for the search input box
function SearchForm(props) {

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  function handleBtnClick(event) {
    // Get the title of the clicked button
    event.preventDefault();
    API.getGoogleBooks(searchTerm)
    .then(books => {
      // store returned list into state variable of employees (this will be static)
      setBooks(books.data.items);
      console.log(books.data.items);
    })
    .catch(err => console.log(err));
  }

  function term(e) {
    console.log(e.target.value);
     return setSearchTerm(e.target.value)
  }

  return (
    <UserContext.Provider value={{ books, searchTerm, handleBtnClick }}>
    <form className="searchForm justify-content-center form-inline m-2">
        <input
          value={books.searchTerm}
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
    </UserContext.Provider>   
  );
}

export default SearchForm;
