import React from 'react';
import Picture from './Picture';
import Details from './Details';

function Card(props) {
  return (
    <div className = "card">
      <Picture img = {props.img}  />
      <h2> {props.name} </h2>
      <Details email = {props.email}  tel = {props.tel} />
    </div>
  );
}


export default Card;
