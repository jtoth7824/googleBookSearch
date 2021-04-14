import axios from "axios";

export default {
  //google api
  getGoogleBooks: function(searchTerm) {
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm);
  },

  // Gets all books from database
  getBooks: function() {
    return axios.get("/api/books");
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    console.log("API id = " + id);
    return axios.delete("/api/books/" + id);
  },
  
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
