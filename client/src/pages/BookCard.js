import './pages.css'
import API from "../utils/API";
import React, { useState } from "react";
import { GformBtn } from "../components/Form";



export default function BookCard(props) {
     const [books, setBooks] = useState([])
     
    
    function loadGbooks() {
    console.log ("is this hit? line 13 Bookcard", (books))
    API.getGbooks()
        .then(res => setBooks(res.data))
        .catch(err => console.log(err));
      };
                 
    function handleAddGBook(e) {
        e.preventDefault();
        console.log("line 22 from BookCard.js", props)
        //!saveGbook goes to Utils/Api.js saveGbook
        API.saveGbook({
            title: props.title,
            subtitle: props.subtitle,
            authors: props.authors,
            description: props.description,
            date: props.date,
            image: props.image,
            link: props.link
          })
           //book data returned from axios
          .then(res => {
            console.log("line 34 bookcard.js",res)
            loadGbooks()
          })
          .then(console.log("line 37 Bookcard.js this should fire after google book added to list") )
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
                <h3>{props.authors}</h3>
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
