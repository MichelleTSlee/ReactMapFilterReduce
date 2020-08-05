import React from 'react';

function Details(props) {
  return (
    <div className = "details">
    <p className="email"> {props.email} </p>
    <p> {props.tel} </p>
    </div>
  );
}


export default Details;
