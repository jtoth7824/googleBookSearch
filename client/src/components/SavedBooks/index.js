import React, {useState, useContext} from "react";
import UserContext from "../../utils/userContext";
import Project from "../Project";
import DeleteBtn from "../DeleteBtn";
import {List, ListItem} from "../List";
import { Link } from "react-router-dom";
import API from "../../utils/API";

function SavedBooks () {

    const {books} = useContext(UserContext);
    const [books1, setBooks1]= useState([]);
  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }
  // Loads all books and sets them to books
  function loadBooks() {
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
                        {books.map(result => (
                            <div key={result.id}>
                            <Project 
                            id = {result.id}
                                author = {result.volumeInfo.authors}
                                image = {result.volumeInfo.imageLinks.smallThumbnail}
                                title = {result.volumeInfo.title}
                                description = {result.volumeInfo.description}
                                link = {result.volumeInfo.previewLink}
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

