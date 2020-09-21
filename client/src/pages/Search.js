import React, { Component } from "react";
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
    const userInput= event.target.value;
    console.log(value);
    // Updating the input's state
    this.setState({
      userInput: value,
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // console.log ("this runs on click")
     this.setState({
      userInput: ''
    });


    API.searchGoogleBooks(this.state.userInput)
     .then ( data => {
       console.log(data.data.items)
       let gbObject = data.data.items
          this.setState({ bookSearchResults: [...gbObject]})
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
