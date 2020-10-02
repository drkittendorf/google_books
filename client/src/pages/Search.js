import React, { Component } from "react";
import { isElementOfType } from "react-dom/test-utils";
import API from "../utils/request";
import BookList from './BookList'


class Search extends Component {
  // Setting the component's initial state
  state = {
    userInput: '',  
    bookSearchResults: []
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    // eslint-disable-next-line
    const userInput= event.target.value;
    // console.log(value);
    // Updating the input's state
    this.setState({
      userInput: value,
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log ("this runs on click from line 27 Search.js")
     this.setState({
      userInput: ''
    });


    API.searchGoogleBooks(this.state.userInput)
     .then ( data => {
       console.log("line 35 Search.js",data.data.items)
       let gbObject = data.data.items
          this.setState({ bookSearchResults: [...gbObject]})
    //    for (var Element of gbObject) {
    //      console.log(Element.volumeInfo.imageLinks)
    //    }
       
      })}

    

  render() {
    const formStyle = {
     display: "flex",
     flexDirection: 'row',
     textAlign: 'center',
     alignSelf: "center",
     justifyContent: 'center',   
    }

    return (
      
      <div>
        <form style={ formStyle } className="search-form">
            
          <input
            className='col-md-4'
            name="booktitle"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Enter Keyword for Book"
          /> 
          <button onClick={this.handleFormSubmit}>SEARCH GOOGLE BOOKS</button>
        </form>
         
         <h1 style={ formStyle }>Google Book Search Results</h1>
        
         <BookList books={this.state.bookSearchResults}  />
         
      </div>
    );
  }
}

export default Search;
