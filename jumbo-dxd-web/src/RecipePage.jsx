import React, { useEffect } from "react";
import { faClock, faUtensils, faUsers, faHeart as faHeartRegular } from '@fortawesome/free-solid-svg-icons';
import './RecipePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RecipePage = (props) => {

  useEffect(() => {
    console.log("RecipePage mounted")
    console.log(props)
  },[])


  return (
    <div className="recipe-page">
      {/* Image */}
      <img src={props.image} alt="Recipe" className="recipe-image" />

      {/* Recipe Title and Icon */}
      <div className="recipe-header">
        <h1 className="recipe-title">{props.title}</h1>
        <span className="heart-icon">
          <FontAwesomeIcon icon={faHeartRegular} />
        </span>
      </div>

        {/* Icons with Text */}
      <div className="icon-list">
      <div className="icon-item">
        <FontAwesomeIcon icon={faClock} />
        <div className="icon-text-container">
          <p>{props.cookingTime} min</p>
        </div>
      </div>
      <div className="icon-item">
        <FontAwesomeIcon icon={faUtensils} />
        <div className="icon-text-container">
          <p>{props.dishType}</p>
        </div>
      </div>
      <div className="icon-item">
        <FontAwesomeIcon icon={faUsers} />
        <div className="icon-text-container">
          <p>{props.servings} people</p>
        </div>
      </div>
    </div>
          
      
      {/* Ingredients */}
      {/* <div className="ingredients-list">
        <p className="section-title">Ingredients</p>
        <ul>
          {props.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div> */}

      {/* Instructions */}
      <div className="instructions-list">
        <p className="section-title">Instructions</p>
        <ol>
          {props.instructions.map((instruction, index) => (
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
