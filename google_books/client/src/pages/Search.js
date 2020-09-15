//! Add code here to be search page for google books 
//* Search - User can search for books via the Google Books API and render them here. User has the option to 
//*"View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.
//* The layout should include at least two React Components for each page Search and Saved.

// When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database

//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.title && formObject.author) {
//       API.saveGbook({
//         title: formGobject.title,
//         author: formGobject.author,
//         synopsis: formGobject.synopsis
//       })
//         .then(res => loadGbooks())
//         .catch(err => console.log(err));
//     }
//   };

//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Books Should I Read?</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 onChange={handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//               />
//               <Input
//                 onChange={handleInputChange}
//                 name="author"
//                 placeholder="Author (required)"
//               />
//               <TextArea
//                 onChange={handleInputChange}
//                 name="synopsis"
//                 placeholder="Synopsis (Optional)"
//               />
//               <FormBtn
//                 disabled={!(formGobject.author && formGobject.title)}
//                 onClick={handleFormSubmit}
//               >
//                 Submit Book
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Books On My List</h1>
//             </Jumbotron>
//             {gbooks.length ? (
//               <List>
//                 {gbooks.map(gbook => (
//                   <ListItem key={gbook._id}>
//                     <Link to={"/gbooks/" + gbook._id}>
//                       <strong>
//                         {gbook.title} by {gbook.author}
//                       </strong>
//                     </Link>
//                     <DeleteBtn onClick={() => deleteGbook(gbook._id)} />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }


// export default Gbooks;

// import { searchGoogleBooks } from "../utils/request";
// import React from 'react';


// const Search = () => {
//   const formstyle = {
//         display: "flex",
//         justifyContent: 'center',
//         backgroundColor: 'orange',
//         font: 'black', 
//         color: 'white',
//         padding: '10px',
//         fontsize: '1.25rem',
//         textDecoration:"none",
//   }

//    return (
//        <div style={ formstyle } className='search-form'>
//            <form action=''>
//                <input type='text'/>
//                <button type="submit">SEARCH GOOGLE BOOKS</button>
//            </form>
//        </div>
//    )

// }
// export default Search;

import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron"
import API from "../utils/request";
// import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    userInput: '',  
    data: []
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const userInput= event.target.value;
    console.log(value);
    // Updating the input's state
    this.setState({
      userInput: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // console.log ("this runs on click")
    
    this.setState({
      userInput: ""
    });
    API.searchGoogleBooks(this.state.userInput)
     .then ( data => {
       console.log(data.data.items)
       let gbObject = data.data.items
       for (const i of gbObject) {
           console.log(i)

        // let bookres = { title : i.volumeInfo.title, date : }
           //push into Data - 
       }
     }
     )
     
  };

  render() {
    
    return (
      <div>
        <form className="search-form">
          <input
            name="booktitle"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Enter Title of Book"
          /> 
          <button onClick={this.handleFormSubmit}>SEARCH GOOGLE BOOKS</button>
        </form>
        <Jumbotron>
              <h1>Google Book Search Results</h1>
        </Jumbotron>
        <div>BOOK OUTPUT DISPLAYS HERE</div>
         // map through data create cards

      </div>
    );
  }
}

export default Form;
