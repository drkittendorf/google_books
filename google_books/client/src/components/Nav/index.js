import React from "react";

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
    <div style={ mystyle } > 
    <a className="navbar-brand" href="/">
    Add your own title
    </a>
    <a className="navbar-brand" href="/bookslist">
    Saved Books List
     </a>
    <a className="navbar-brand" href="/search">
    Search Google Books
    </a>
    </div>
  );
}

export default Nav;