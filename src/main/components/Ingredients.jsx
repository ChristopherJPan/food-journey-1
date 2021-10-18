import React from 'react';


const Ingredients = (props) => {

  return(
    <li id="ingredients">
      {props.name} {props.quantity} {props.unitOfMeasurement}
    </li>
  )
}

export default Ingredients;