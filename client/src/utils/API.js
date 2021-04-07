import axios from "axios";

const apiKey = "AIzaSyBE8rew2L7hzqHNcbX1zl03rA4mdytQuu8";
const searchTerm = "Handmaid's Tale";

export default {
  //google api
  getGoogleBooks: function() {
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "&key=" + apiKey);
  },

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
