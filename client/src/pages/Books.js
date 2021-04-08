import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})
  const [googleBook, setGoogle] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();

    // API.getEnvVars()
    //   .then(res=> {
    //     console.log("inenvVars");
    //     console.log(res.apiKey);
    //   })
    //   .catch(err => console.log(err));

    API.getGoogleBooks()
      .then(res =>{
        console.log(res.data)
        setGoogle(res.data)
      })
        .catch(err => console.log(err));
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    // console.log(googleBook.items[0].volumeInfo.title);
    // console.log(googleBook.items[0].volumeInfo.description);
    // console.log(googleBook.items[0].volumeInfo.imageLinks.smallThumbnail);
    // console.log(googleBook.items[0].volumeInfo.previewLink);
    // console.log(googleBook.items[0].volumeInfo.authors);

    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => {
          var newAuthor;

          if(googleBook.items[0].volumeInfo.authors.length > 1) {
            newAuthor = googleBook.items[0].volumeInfo.authors.join(", ");
            }
            else {
              newAuthor = googleBook.items[0].volumeInfo.authors[0];
            };
          console.log(newAuthor);
          API.saveBook({
            title: googleBook.items[0].volumeInfo.title,
            image: googleBook.items[0].volumeInfo.imageLinks.smallThumbnail,
            link: googleBook.items[0].volumeInfo.previewLink,
            synopsis: googleBook.items[0].volumeInfo.description,
            authors: newAuthor
          })
          loadBooks()
        })
        .catch(err => console.log(err));

    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <Container fluid>

        {/* {googleBook.map(result => ( */}
          {books.map(book => (
        <Row key={book._id}>
          <Col size="md-10 md-offset-1">
              <h1>
                {book.title} by {book.author}
              </h1>
              <img src= {book.image} />
            <article>
              <h1>Synopsis</h1>
              <p>
                {book.synopsis}
              </p>
            </article>
            <a href={book.link} className="btn">
              <button>View</button>
            </a>
            <button>
              Save
            </button>
          </Col>
        </Row>

       ))}
      </Container>
      </Container>
    );
  }


export default Books;
