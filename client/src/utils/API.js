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
    console.log("something hit this line 22 API.js") //! Submitting your own title will hit this route
    return axios.post("/api/books", bookData);
  },
  getGbooks: function() {
    console.log("something hit this line 26 API.js")
    return axios.get("/api/gbooks");
  },
  // Saves a GOOGLE book to the database
  saveGbook: function(bookData) {
    console.log("something hit this-- line 31 API.js")
    console.log("line 32 api.js", bookData)
    return axios.post("/api/gbooks", bookData);
    
  },
    // Gets GOOGLE book with the given id
  getGbook: function(id) {
    console.log("something hit this-- line 38 API.js")    
    return axios.get("/api/gbooks/" + id);
  },
  // Deletes the GOOGLE book with the given id
  deleteGbook: function(id) {
    console.log("something hit this-- line 43 API.js")  
    return axios.delete("/api/gbooks/" + id);
  }  

};