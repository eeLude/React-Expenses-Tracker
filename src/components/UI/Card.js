import React from "react";
import "./Card.css";

//Card component to wrap around other components
const Card = (props) => {
  const classes = "card " + props.className; //adds the class name to the card

  return <div className={classes}>{props.children}</div>; //renders the card with the class name and children
};

export default Card;
