import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

function Gbdetail(props) {
  const [gbook, setGbook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  
  const {id} = useParams()
  useEffect(() => {
    API.getGbook(id)
      .then(res => setGbook(res.data))
      .catch(err => console.log(err));
      // eslint-disable-next-line
  }, [])

  return (
      <Container fluid align="center">
          <Link to="/bookslist">← Back to Saved Books List</Link>
       <Row>
          <div className='card-container2'>
          <a href={gbook.link} target='_blank' rel="noopener noreferrer">
          <img src={gbook.image} alt={gbook.title} title={gbook.title}/>
          </a>
                <h2>{gbook.title}</h2>

                <h4>{gbook.subtitle}</h4>

                <h3>{gbook.authors}</h3>
                {console.log("GBDETAILS",gbook)}
                <p>{gbook.description}</p>
                <h6>Published Date: {gbook.date}</h6>

                <a 
                href={gbook.link} target="_blank" 
                rel="noopener noreferrer">
                Google Book link to: {gbook.title}
                </a>    
                
        </div>
         
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/bookslist">← Back to Saved Books List</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Gbdetail;
