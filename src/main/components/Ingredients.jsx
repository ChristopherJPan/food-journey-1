/**
 * ************************************
 * @module Ingredients
 * @author Michael Pay & Christopher Pan
 * @date 2021/10/17
 * @description presentation component which renders ingredients as list items
 * ************************************
 */

import React from 'react';

const Ingredients = (props) => {

  return(
    <li id="ingredients">
      {props.name} {props.quantity} {props.unitOfMeasurement}
    </li>
  )
}

export default Ingredients;