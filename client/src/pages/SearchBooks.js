import React, { useState } from "react";
import API from "../utils/API";
import UserContext from "../utils/userContext";
import CardBtn from "../components/CardBtn";
import Jumbotron from "../components/Jumbotron";
import SearchResults from "../components/SearchResults";
import { Row, Container } from "../components/Grid";

function Search() {
    // set state for books array, the searchterm
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm]= useState();
    // const {book} = useContext(UserContext);

    // function that retrieves books based upon searchterm when user clicks Search button
    function handleBtnClick(event) {
      event.preventDefault();
      // call google book api to retrieve books based upon searchTerm
      API.getGoogleBooks(searchTerm)
        .then(books => {
           // store returned list into state variable of books
           setBooks(books.data.items);
         })
       .catch(err => console.log(err));
    }

    // function to update searchterm in state as user changes the input box value
    function onChangeSearchTerm(e) {
      return setSearchTerm(e.target.value);
    }

    // return the rendered search results page
    return (
      <Container fluid>
        <Jumbotron>
          <h1><strong>Google Books Search</strong></h1>
          <br>
          </br>
          <h3>Search for and Save Books of Interest</h3>
        </Jumbotron>
        <Row>
          <UserContext.Provider value={{books, searchTerm, handleBtnClick}}>
            <div className="container-fluid">
              <div className="card interiorCardColor">
                <h4 className="formPadding"><strong>Book Search</strong></h4>
                <form className="formPadding">
                  <input
                    value={searchTerm}
                    onChange={onChangeSearchTerm}
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
              </div>
            </div>
            <SearchResults newValue={books} change={setBooks}/>
          </UserContext.Provider>
        </Row>
      </Container>
    );
}

export default Search;