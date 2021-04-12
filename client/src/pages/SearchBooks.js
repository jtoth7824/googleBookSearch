import React, { useContext, useState } from "react";
import API from "../utils/API";
import UserContext from "../utils/userContext";
import CardBtn from "../components/CardBtn";
import Jumbotron from "../components/Jumbotron";
import SearchResults from "../components/SearchResults";
import { Row, Container } from "../components/Grid";

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
      <Container fluid>
                    <Jumbotron>
              <h1>Google Books Search</h1>
              <br>
              </br>
              <h3>Search for and Save Books of Interest</h3>
            </Jumbotron>
        <Row>
          <UserContext.Provider value={{books, searchTerm, handleBtnClick}}>
            <div className="container-fluid">
              <div className="card">
                <h4><strong>Book Search</strong></h4>
                <br />
              <form className=" form-inline">
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

              </div>
              <SearchResults />
            </div>
          </UserContext.Provider>
        </Row>
      </Container>
    );
}

export default Search;