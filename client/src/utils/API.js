import axios from "axios";
//import React, {useState} from "react";
//import UserContext from "../../utils/userContext";
//const apiKey = "AIzaSyBE8rew2L7hzqHNcbX1zl03rA4mdytQuu8";
//const searchTerm = "Star Wars";
//https://www.googleapis.com/books/v1/volumes?q=
export default {
  //google api
  getGoogleBooks: function(searchTerm) {
    console.log(searchTerm);
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm);
  },

  // getEnvVars: function(temp) {
  //   console.log("step 2");
  //   return axios.get("/api/books/" + temp);
  // },

  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
