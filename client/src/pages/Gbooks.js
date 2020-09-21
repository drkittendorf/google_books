import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Gbooks() {
  // Setting our component's initial state
  const [gbooks, setGbooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadGbooks()
  }, [])

  // Loads all books and sets them to books
  function loadGbooks() {
    API.getGbooks()
      .then(res => 
        setGbooks(res.data)
      )
      .catch(err => console.log(err));
  };

//   // Deletes a book from the database with a given id, then reloads books from the db
//   function deleteBook(id) {
//     API.deleteBook(id)
//       .then(res => loadBooks())
//       .catch(err => console.log(err));
//   }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveGbook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadGbooks())
        .catch(err => console.log(err));
    }
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
                placeholder="Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
         </Row>
      </Container>
    );
  }


export default Gbooks;
