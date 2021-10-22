import React, { Component, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import RecipeIngredientBox from './RecipeIngredientBox';

const CreateRecipe = props => {
  const history = useHistory();
  const [ingredientInputBoxes, setIngredientInputBoxes] = useState([]);
  const [renderIt, setRenderIt] = useState(true);
  const [deleteIt, setDeleteIt] = useState(false);

  const handleDeleteIngredient = (id) => {
    console.log('you tried deleting id', id);
    console.log('pre spliced ingredientInputBoxes', ingredientInputBoxes);
    const newBoxes = [...ingredientInputBoxes];
    // const sliced = newBoxes.splice(0, 1);
    console.log('ingredientInputBoxes', ingredientInputBoxes);
    setIngredientInputBoxes(newBoxes.filter(el => el.props.id !== id));
    setRenderIt(true);
    setDeleteIt(true);
  };

  const handleAddIngredient = () => {
    // console.log('the ingredients in ingredientInputBoxes is currently', ingredientInputBoxes);
    ingredientInputBoxes.push('new box!');
    const newBoxes = ingredientInputBoxes.map((el, index) => (
      <RecipeIngredientBox
        ingredientInputBoxes={ingredientInputBoxes}
        id={index}
        handleDeleteIngredient={handleDeleteIngredient}
    />
    ));
    console.log('newBoxes.length after adding ingredient', newBoxes.length);
    setIngredientInputBoxes(newBoxes);
    setRenderIt(true);
  };

  useEffect(() => {
    if (renderIt && deleteIt) {
      console.log('post spliced ingredientInputBoxes', ingredientInputBoxes);
      setDeleteIt(false);
    }
    if (renderIt) {
      console.log('this is ingredients in ingredientInputBoxes after useEffect', ingredientInputBoxes);
      setRenderIt(false);
    }
  }, [ingredientInputBoxes]);

  const handleClick = (e) => {
    const ingredientNames = [];
    const getNames = document.getElementsByClassName('ingredientName');
    for (let ingredient of getNames) {
      ingredientNames.push(ingredient.value);
    }
    console.log('ingredientNames, ', ingredientNames);

    const ingredientQuantities = [];
    const getQuantities = document.getElementsByClassName('ingredientQuantity');
    for (let ingredient of getQuantities) {
      ingredientQuantities.push(ingredient.value);
    }
    console.log('const ingredientQuantities, ', ingredientQuantities);

    const ingredientUnits = [];
    const getUnits = document.getElementsByClassName('ingredientUnit');
    for (let ingredient of getUnits) {
      ingredientUnits.push(ingredient.value);
    }
    console.log('const ingredientUnits, ', ingredientUnits);

    const ingredients = [];
    for (let i = 0; i < ingredientNames.length; i++) {
      const currentIngredient = {
        name: ingredientNames[i],
        quantity: ingredientQuantities[i],
        unitOfMeasurement: ingredientUnits[i],
      };
      ingredients.push(currentIngredient);
    }


    const newRecipe = {
      recipeName: document.getElementById('recipeName').value,
      ingredients,
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
            <li>
              <label htmlFor="recipeName">Recipe Name</label>
              <input type="text" id="recipeName" />
            </li>
            {ingredientInputBoxes.map((el, index) => (
              <RecipeIngredientBox
                ingredientInputBoxes={ingredientInputBoxes}
                id={index}
                handleDeleteIngredient={handleDeleteIngredient}
              />
            ))}
            <li>
              <button onClick={() => handleAddIngredient()}>Add Ingredient</button>
            </li>
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
