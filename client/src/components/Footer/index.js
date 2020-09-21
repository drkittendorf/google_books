import React from "react";
import "./index.css";

function Nav() {
    const mystyle = {
        display: "flex",
        justifyContent: 'center',
        backgroundColor: 'orange',
        font: 'black', 
        color: 'white',
        padding: '10px',
        fontsize: '1.25rem',
        textDecoration:"none",
       
                    
    };

  return (
    <div className='footer' style={ mystyle } > 
    <a className="navbar-brand" href="/search">
    Search Google Books
    </a>
    <a className="navbar-brand" href="/">
    Add a Custom Title to List
    </a>
    <a className="navbar-brand" href="/bookslist">
    The Saved Books List
     </a>
    </div>
  );
}

export default Nav;