import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
          div {
            font-family: Arial, Helvetica, sans-serif;
            text-align: center;
            text-transform: uppercase;
          }
  
          img {
            max-width: 100%;
          }
          `}</style>
      <h1>About</h1>
      <img src="https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80" alt=""/>
    </div>
  );
}
  
export default Header;