import axios from "axios";


//! Export an object containing methods we'll use for accessing the Google Book Search

export default {
 searchGoogleBooks: function(bookTitle) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookTitle + "&maxResults=24");
  },

};