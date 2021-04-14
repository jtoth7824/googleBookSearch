import React, {useState, useEffect} from "react";
import API from "../utils/API";
import SavedBooksContext from "../utils/savedBooksContext";
import SaveResults from "../components/SaveResults";
import Jumbotron from "../components/Jumbotron";
import {Row, Container} from "../components/Grid";

function SavedBooks () {
    // set up state for saved books and a trigger
    const [savedbooks, setSavedBooks]= useState([]);
    const [trigger, setTrigger] = useState("1");

    // Load all saved books and store them with setBooks
    useEffect(() => {
        loadSavedBooks();
      }, [trigger])

    // function to retrieve the saved books from database
    function loadSavedBooks() {
        API.getBooks()
          .then(res => {
            // set state to returned list of saved books
            setSavedBooks(res.data)
          })
        .catch(err => console.log(err));
    };

    // return the rendered saved books page
    return (
        <SavedBooksContext.Provider value={{ savedbooks, trigger}}>
            <Container fluid>
                <Jumbotron>
                  <h1><strong>Google Books Search</strong></h1>
                  <br>
                  </br>
                  <h3>Search for and Save Books of Interest</h3>
                </Jumbotron>
                <Row>
                <div className="container-fluid containerColor marginBottomCont">
                    {savedbooks.length ? (
                        <div className="row">
                            <div className="container-fluid">
                                <div className="card">
                                    <div className="card-body interiorCardColor">
                                        <h2 className="card-title ">Saved Books</h2>
                                        <div className="row row-cols-1">
                                            <div>
                                                {savedbooks.map(result => (
                                                    <div key={result._id}>
                                                        <SaveResults 
                                                            // pass book properties to save results
                                                            // pass to children the trigger state and method to change trigger
                                                            newValue={trigger} change={setTrigger}
                                                            id = {result._id}
                                                            author = {result.author}
                                                            image = {result.image}
                                                            title = {result.title}
                                                            description = {result.synopsis}
                                                            link = {result.link}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="row text-center h-100">
                            <div className="col-md-12 text-center my-auto">
                                <h3><strong>No Saved Books</strong></h3>
                            </div>
                        </div>
                    )}
                </div>
                </Row>
            </Container>
        </SavedBooksContext.Provider>
    )
}

export default SavedBooks;