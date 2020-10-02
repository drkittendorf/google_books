import React from 'react';
import BookCard from './BookCard';

export default function BookList(props) {
    return(
        <div className='list'>
           {
               props.books.map((gbook, i) => {
                    
                return <BookCard 
                                key={i}
                                image={gbook.volumeInfo.imageLinks ? gbook.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x195'}
                                authors={gbook.volumeInfo.authors ? gbook.volumeInfo.authors[0] : 'No Author Information Available'}
                                title={gbook.volumeInfo.title}
                                subtitle={gbook.volumeInfo.subtitle}
                                date={gbook.volumeInfo.publishedDate}
                                description={gbook.volumeInfo.description} 
                                link={gbook.volumeInfo.infoLink}
                        />
                 })}
        </div>
    )
}
// ? gbook.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x195'