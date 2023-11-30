import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUtensils, faUsers, faHeart as faHeartRegular, faLeaf } from '@fortawesome/free-solid-svg-icons';
import './RecipePage.css';
import PastaPesto from './img/recipePic.png';

const RecipePage = () => {
  const mockIngredients = [
    "400 g of your favourite spaghetti",
    <span className="green-leaf"><FontAwesomeIcon icon={faLeaf} /> 1 cup of fresh basil leaves</span>,
    <span className="green-leaf"><FontAwesomeIcon icon={faLeaf} /> 4 garlic cloves</span>,
    "1/4 cup olive oil",
    "Salt and pepper to taste"
  ];

  const mockInstructions = [
    "Cook 400 g pasta according to the instructions on the package.",
    "While the pasta is cooking, chop about 6-8 tomatoes, use 1 cup fresh basil leaves and mince 4 garlic cloves.",
    "In a pan, heat 1/4 cup of olive oil over medium heat, then add the chopped garlic and fry for a minute.",
    "Add the chopped tomatoes and cook for a few minutes until soft.",
    "Stir in the fresh basil and season with salt and pepper.",
    "Mix the cooked pasta with the tomato basil sauce.",
    "Serve and, if desired, sprinkle with grated Parmesan cheese."
  ];

  return (
    <div className="recipe-page">
      {/* Image */}
      <img src={PastaPesto} alt="Recipe" className="recipe-image" />

      {/* Recipe Title and Icon */}
      <div className="recipe-header">
        <h1 className="recipe-title">Recipe Title</h1>
        <span className="heart-icon">
          <FontAwesomeIcon icon={faHeartRegular} />
        </span>
      </div>

      {/* Icons with Text */}
      <div className="icon-list">
        <div className="icon-item">
          <FontAwesomeIcon icon={faClock} />
          <div className="icon-text-container">
            <p>30 min</p>
          </div>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faUtensils} />
          <div className="icon-text-container">
            <p>Main Dish</p>
          </div>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faUsers} />
          <div className="icon-text-container">
            <p>4 people</p>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <div className="ingredients-list">
        <p className="section-title">Ingredients</p>
        <ul>
          {mockIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="instructions-list">
        <p className="section-title">Instructions</p>
        <ol>
          {mockInstructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button className="buy-button">Buy this recipe</button>
        <button className="suggest-button">Suggest Similar</button>
      </div>
    </div>
  );
}

export default RecipePage;
