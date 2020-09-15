//!START of code for google conversion
//* Saved - Renders all books saved to the Mongo database. User has an option to 
//*"View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.
//*The layout should include at least two React Components for each page Search and Saved.

// function Gbooks() {
//     // Setting our component's initial state
//     const [gbooks, setGbooks] = useState([])
//     const [formGobject, setFormGobject] = useState({})
  
//     // Load all books and store them with setBooks
//     useEffect(() => {
//       loadGbooks()
//     }, [])
  
//     // Loads all books and sets them to books
//     function loadGbooks() {
//       API.getGbooks()
//         .then(res => 
//           setGbooks(res.data)
//         )
//         .catch(err => console.log(err));
//     };
  
//     // Deletes a book from the database with a given id, then reloads books from the db
//     function deletegBook(id) {
//       API.deleteGbook(id)
//         .then(res => loadGbooks())
//         .catch(err => console.log(err));
//     }
  
    
  
  
//       return (
//         <Container fluid>
//           <Row>
//             <Col size="md-6">
//               <Jumbotron>
//                 <h1>What Books Should I Read?</h1>
//               </Jumbotron>
              
//             </Col>
//             <Col size="md-6 sm-12">
//               <Jumbotron>
//                 <h1>Books On My List</h1>
//               </Jumbotron>
//               {gbooks.length ? (
//                 <List>
//                   {gbooks.map(gbook => (
//                     <ListItem key={gbook._id}>
//                       <Link to={"/gbooks/" + gbook._id}>
//                         <strong>
//                           {gbook.title} by {gbook.author}
//                         </strong>
//                       </Link>
//                       <DeleteBtn onClick={() => deleteGbook(gbook._id)} />
//                     </ListItem>
//                   ))}
//                 </List>
//               ) : (
//                 <h3>No Results to Display</h3>
//               )}
//             </Col>
//           </Row>
//         </Container>
//       );
//     }
  
  
//   export default Gbooks;


  