import React from 'react';


const Ingredients = (props) => {

  return(
    <div id="ingredients">
      ${props.name} ${props.quantity} ${props.unitOfMeasurement} {/* may need ``, not sure*/}
    </div>
  )
}

export default Ingredients;