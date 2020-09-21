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
    <h1>Dale's React Book Page</h1>
    </div>
  );
}

export default Nav;