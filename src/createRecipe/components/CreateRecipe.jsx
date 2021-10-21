import React, {Component} from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import RecipeIngredientBox from './RecipeIngredientBox';

const CreateRecipe = props => {
  const history = useHistory();
  const [ingredientInputBoxes, setIngredientInputBoxes] = useState([]);
  const [renderIt, setRenderIt] = useState(true);
 
  const handleAddIngredient = () => {
    console.log('ingredientInputBoxes', ingredientInputBoxes);
    const newBoxes = [...ingredientInputBoxes];
    newBoxes.push(<RecipeIngredientBox handleAdd={handleAddIngredient} />);
    setIngredientInputBoxes(newBoxes);
    setRenderIt(true);
  };

  useEffect(() => {
    if (renderIt) {
      const newBoxes = [...ingredientInputBoxes];
      newBoxes.push(<RecipeIngredientBox handleAdd={handleAddIngredient} />);
      setIngredientInputBoxes(newBoxes);
      setRenderIt(false);
    }

  }, [ingredientInputBoxes]);

  const handleClick = (e) => {
    const newRecipe = {
      recipeName: document.getElementById('recipeName').value,
      ingredients: [{
        name: document.getElementById('ingredientName').value,
        quantity: document.getElementById('ingredientQuantity').value,
        unitOfMeasurement: document.getElementById('ingredientUnit').value,
      }],
      instructions: document.getElementById('instructions').value,
    };

    fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    })
      .then(res => {
        history.push('/');
      })
      .catch(err => console.log(`can't add recipe: ${JSON.stringify(err)}`));
  };

  return (
    <section id="createRecipe">
      <fieldset id="newRecipe">
        <legend>New Recipe</legend>
        <form>
          <ul>
          {ingredientInputBoxes}
          <li>
            <label htmlFor="instructions">Instructions</label>
            <input type="text" id="instructions" />
          </li> 
        <button onClick={(e) => handleClick(e)}>Submit</button>
        </ul>
        </form>
      </fieldset>
    </section>
  );
};

export default CreateRecipe;
