import axios from "axios";

export default {
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
    console.log("something hit this line 18 API.js")
    return axios.post("/api/books", bookData);
  },
  getGbooks: function() {
    return axios.get("/api/books");
  },
  // Saves a GOOGLE book to the database
  saveGbook: function(bookData) {
    console.log("something hit this-- line 25 API.js")
    console.log("line 27 api.js", bookData)
    return axios.post("/api/gbooks", bookData);
    
  },
//     // Gets GOOGLE book with the given id
//     getGbook: function(id) {
//     return axios.get("/api/gbooks/" + id);
//   },
//   // Deletes the GOOGLE book with the given id
//   deleteGbook: function(id) {
//     return axios.delete("/api/gbooks/" + id);
//   }  

};