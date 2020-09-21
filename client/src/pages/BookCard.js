import './pages.css'
import API from "../utils/API";
import React, { useState } from "react";
import { GformBtn } from "../components/Form";
// import (handleGformSubmit) from "./AddGoogleBooks";

export default function BookCard(props) {
     const [books, setBooks] = useState([])
     
    
     function loadBooks() {
        API.getBooks()
          .then(res => setBooks(res.data))
          .catch(err => console.log(err));
      };
                 
    function handleAddGBook(e) {
        e.preventDefault();
        console.log("line 19 from BookCard.js", props)
        API.saveGbook({
            title: props.title,
            subtitle: props.subtitle,
            author: props.author.i,
            description: props.description,
            date: props.publishedDate,
            image: props.image,
            link: props.link
          })
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
                  className='button' onClick={handleAddGBook} 
                  >
                 Add to List
                </GformBtn>
                </form>
        </div>
        </div>
    )
}
