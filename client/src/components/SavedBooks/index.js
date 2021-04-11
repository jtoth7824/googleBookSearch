import React, {useState, useEffect, useContext} from "react";
import UserContext from "../../utils/userContext";
import Project from "../Project";
import DeleteBtn from "../DeleteBtn";
import {List, ListItem} from "../List";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Save from "../Save";

function SavedBooks () {

    const {books} = useContext(UserContext);
    const [books1, setBooks1]= useState([]);
  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks1())
      .catch(err => console.log(err));
  }

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks1();
      }, [])

  // Loads all books and sets them to books
  function loadBooks1() {
    API.getBooks()
      .then(res => 
        setBooks1(res.data)
      )
      .catch(err => console.log(err));
  };

    return (
<div className="container containerColor marginBottomCont">
<div className="row">
    <div className="marginBottomCol">
        <div className="card-transparent">
            <div className="card-body mt-5">
                <h2 className="card-title text-center myBottomBorder1">Results</h2>
                <br />
                <div className="row row-cols-1">
                        {books1.map(result => (
                            <div key={result.id}>
                            <Save 
                            id = {result.id}
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
    )
}

export default SavedBooks;

