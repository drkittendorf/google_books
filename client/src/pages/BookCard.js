// import React from 'react'
import './pages.css'
import API from "../utils/API";
import React, { useState } from "react";
import { GformBtn } from "../components/Form";

export default function BookCard(props) {
     const [books, setBooks] = useState([])
     
    // this code copied from books.js    7-24
     function loadBooks() {
        
        API.getBooks()
          .then(res => 
             setBooks(res.data)
          )
          .catch(err => console.log(err));
      };
                 
    function handleGformSubmit(event) {
        event.preventDefault();
        console.log("line 23 from BookCard.js", props)
         API.saveBook({
            key: props.i,
            title: props.title,
            image: props.image,
            subtitle: props.subtitle,
            // author: props.author,
            date: props.publishedDate,
            description: props.description,
            link: props.link
          })
            .then(res => loadBooks())
            .catch(err => console.log(err));
     };

    return (
        <div className='card-container'>
          <a href={props.link} target='_blank' rel="noopener noreferrer">
          <img src={props.image} alt={props.title} title={props.title}/>
          </a>
                <div className='desc'>
                <h2>{props.title}</h2>
                <h4>{props.subtitle}</h4>
                <h3>{props.author}</h3>
                <h4>Published Date: {props.date}</h4>
                <p>{props.description}</p>
                <a href={props.link} target="_blank" rel="noopener noreferrer">Google Book link to: {props.title}</a> 
                <form>
                <GformBtn
                  className='button' onClick={handleGformSubmit} 
                  >
                 Add to List
                </GformBtn>
                </form>
        </div>
        </div>
    )
}
