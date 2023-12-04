import React, { useEffect } from "react";
import {
  faClock,
  faUtensils,
  faUsers,
  faHeart as faHeartRegular,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import "./RecipePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const recipesHardCoded = [
//   {
//     ingredients: [
//       "400 g of your favourite spaghetti",
//       <span className="green-leaf">
//         <FontAwesomeIcon icon={faLeaf} /> 1 cup of fresh basil leaves
//       </span>,
//       <span className="green-leaf">
//         <FontAwesomeIcon icon={faLeaf} /> 4 garlic cloves
//       </span>,
//       "1/4 cup olive oil",
//       "Salt and pepper to taste",
//     ],
//     instructions: [
//       "Cook 400 g pasta according to the instructions on the package.",
//       "While the pasta is cooking, chop about 6-8 tomatoes, use 1 cup fresh basil leaves and mince 4 garlic cloves.",
//       "In a pan, heat 1/4 cup of olive oil over medium heat, then add the chopped garlic and fry for a minute.",
//       "Add the chopped tomatoes and cook for a few minutes until soft.",
//       "Stir in the fresh basil and season with salt and pepper.",
//       "Mix the cooked pasta with the tomato basil sauce.",
//       "Serve and, if desired, sprinkle with grated Parmesan cheese.",
//     ],
//     title: "Spaghetti with Tomato Basil Sauce",
//     image: PastaPesto,
//     servings: 4,
//     dishType: "Main Dish",
//     cookingTime: 30,
//   },
// ];

const RecipePage = (props) => {
  return (
    <div className="recipe-page">
      {/* Image */}
      <img src={props.recipe.image} alt="Recipe" className="recipe-image" />

      {/* Recipe Title and Icon */}
      <div className="recipe-header">
        <h1 className="recipe-title">{props.recipe.title}</h1>
        <span className="heart-icon">
          <FontAwesomeIcon icon={faHeartRegular} />
        </span>
      </div>

      {/* Icons with Text */}
      <div className="icon-list">
        <div className="icon-item">
          <FontAwesomeIcon icon={faClock} />
          <div className="icon-text-container">
            <p>{props.recipe.cookingTime} min</p>
          </div>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faUtensils} />
          <div className="icon-text-container">
            <p>{props.recipe.dishType}</p>
          </div>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faUsers} />
          <div className="icon-text-container">
            <p>{props.recipe.servings} people</p>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <div className="ingredients-list">
        <p className="section-title">Ingredients</p>
        <ul>
          {props.recipe.ingredients.map((ingredient, index) =>
            Math.random() > 0.25 ? (
              <li key={index}>{ingredient}</li>
            ) : (
              <span className="green-leaf" key={index}>
                <FontAwesomeIcon icon={faLeaf} /> {ingredient}
                <br></br>
              </span>
            )
          )}
        </ul>
      </div>

      {/* Instructions */}
      <div className="instructions-list">
        <p className="section-title">Instructions</p>
        <ol>
          {props.recipe.instructions.map((instruction, index) => (
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
};

export default RecipePage;
