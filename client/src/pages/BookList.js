import React from 'react';
import BookCard from './BookCard';

export default function BookList(props) {
    return(
        <div className='list'>
           {
               props.books.map((gbook, i) => {
                    
                return <BookCard 
                                key={i}
                                image={gbook.volumeInfo.imageLinks.thumbnail? gbook.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x195'}
                                author={gbook.volumeInfo.authors}
                                title={gbook.volumeInfo.title}
                                subtitle={gbook.volumeInfo.subtitle}
                                date={gbook.volumeInfo.publishedDate}
                                description={gbook.volumeInfo.description} 
                                link={gbook.volumeInfo.infoLink}
                                // action={onSave}
                                 />
                 })}
        </div>
    )
}
