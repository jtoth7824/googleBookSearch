import React, {useState, useEffect} from "react";
import API from "../utils/API";
import SavedBooksContext from "../utils/savedBooksContext";
import SaveResults from "../components/SaveResults";
import Jumbotron from "../components/Jumbotron";
import {Container} from "../components/Grid";

function SavedBooks () {

    const [books1, setBooks1]= useState([]);
    const [trigger, setTrigger] = useState("1");

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks1();
      }, [trigger])

    // Loads all books and sets them to books
    function loadBooks1() {
        API.getBooks()
          .then(res => {
            console.log(res.data)
            setBooks1(res.data)
          })
        .catch(err => console.log(err));
    };

    return (
        <SavedBooksContext.Provider value={{ books1, trigger}}>
            <Container fluid>
                <Jumbotron>
                  <h1>Google Books Search</h1>
                  <br>
                  </br>
                  <h3>Search for and Save Books of Interest</h3>
                </Jumbotron>
                <div className="container-fluid containerColor marginBottomCont">
                    {books1.length ? (
                        <div className="row">
                            <div className="card">
                                <div className="card-body interiorCardColor">
                                    <h2 className="card-title ">Saved Books</h2>
                                    <div className="row row-cols-1">
                                        <div>
                                            {books1.map(result => (
                                                <div key={result._id}>
                                                    <SaveResults 
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
                    ) : (
                        <div class="row text-center h-100">
                            <div class="col-md-12 text-center my-auto">
                                <h3><strong>No Saved Books</strong></h3>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </SavedBooksContext.Provider>
    )
}

export default SavedBooks;