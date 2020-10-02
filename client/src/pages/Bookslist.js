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
  
  //! Load all saved books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  useEffect(() => {
    loadGbooks()
  }, [])


  //! Loads all books and sets them to books or Gbooks
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
        {console.log("console from Bookslist.js", res)
        setGbooks(res.data)
        })

      .catch(err => console.log(err));
  };

  //! Deletes a book or Google Book from the database / Book List with a given id, then reloads the remaining books from the db
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
              <h2>Books Added Manually to the List</h2>
            
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={'/books/' + book._id}>
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
             <h2>Books added from Google Books</h2>
             {gbooks.length ? (
              <List>
                {gbooks.map(gbook => (
                  <ListItem key={gbook._id}>
                    <Link to={'/gbooks/' + gbook._id}>
                      <strong>
                        {gbook.title} by {gbook.authors}
                        {console.log("console logging book", gbook)} 
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteGbook(gbook._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Google Books have been added to the list</h3>
            )}


          </Col>
        </Row>
      </Container>
    );
  }


export default Bookslist;
