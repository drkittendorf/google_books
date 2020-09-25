import axios from "axios";

//! FRONT END API CALLS
export default {
  // Gets all books
  getBooks: function() {
    console.log("something hit this line 6 API.js") //! Clicking The Saved Books List Link will hit this && submitting your own title
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    console.log("something hit this line 11 API.js")
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    console.log("something hit this line 16 API.js") //! deleting from Saved Books List will hit this route
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("something hit this line 21 API.js") //! Submitting your own title will hit this route
    return axios.post("/api/books", bookData);
  },
  getGbooks: function() {
    console.log("something hit this line 25 API.js")
    return axios.get("/api/books");
  },
  // Saves a GOOGLE book to the database
  saveGbook: function(bookData) {
    console.log("something hit this-- line 30 API.js")
    console.log("line 27 api.js", bookData)
    return axios.post("/api/Gbooks", bookData);
    
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