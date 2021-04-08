import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function DetailGoogle(props) {
  const [book, setBook] = useState({})
  const [googleBook, setGoogle] = useState({})
console.log(googleBook);
  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  // useEffect(() => {
  //   API.getGoogleBooks()
  //     .then(res =>{
  //       console.log(res.data)
  //       setGoogle(res.data)
  //     })
  //       .catch(err => console.log(err));

  //       console.log(googleBook);
  // })

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {googleBook.title} by {googleBook.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        {/* {googleBook.map(result => ( */}
        <Row key={googleBook.id}>
          <Col size="md-10 md-offset-1">
              <h1>
                {googleBook.title} by {googleBook.author}
              </h1>
            <article>
              <h1>Synopsis</h1>
              <p>
                {googleBook.synopsis}
              </p>
            </article>
          </Col>
        </Row>

       {/* ))} */}
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default DetailGoogle;
