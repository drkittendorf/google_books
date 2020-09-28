import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn/booksdel";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


function Bookslist() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [gbooks, setGbooks] = useState([])
  
  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  useEffect(() => {
    loadGbooks()
  }, [])


  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };
   
  function loadGbooks() {
    API.getGbooks()
      .then(res => 
        setGbooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }
  
  function deleteGbook(id) {
    API.deleteGbook(id)
      .then(res => loadGbooks())
      .catch(err => console.log(err));
  }



    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            
              <h1>Books Added Manually to the List</h1>
            
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Col>
            
            <Col size="md-6 sm-12">
             <h1>Books added from GoogleBooks</h1>
             {gbooks.length ? (
              <List>
                {gbooks.map(gbook => (
                  <ListItem key={gbook._id}>
                    <Link to={"/gbooks/" + gbook._id}>
                      <strong>
                        {gbook.title} by {gbook.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteGbook(gbook._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}


          </Col>
        </Row>
      </Container>
    );
  }


export default Bookslist;
