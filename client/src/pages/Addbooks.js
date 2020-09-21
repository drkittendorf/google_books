import React, { useState } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Books() {
  // Setting our component's initial state
//   const [books, setBooks] = useState([])
const initialFormObjectState = {
    title: "Title (required)",
    author: "Author (required",
    synopsis: ""
  };

const [formObject, setFormObject] = useState({...initialFormObjectState})
  
  // Load all books and store them with setBooks
//   useEffect(() => {
//     loadBooks()
//   }, [])
 
 
  const clearState = () => {
    setFormObject({...initialFormObjectState });
  };

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
    //   .then(res => setBooks(res.data))
      .then(clearState)
      .catch(err => console.log(err));
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(e) {
    e.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(console.log("book has been submitted to list") ) 
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };
   
   // Handles updating component state when the user types into the input field
   function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
    // console.log(formObject)
  };


    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            
              <h1>What book title would you like to add to your list?</h1>
            
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder={formObject.title}
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder={formObject.author}
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder={formObject.synopsis}
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}> Submit Book
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;