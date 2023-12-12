
import React from "react";
import "./CategorySection.css";


const CategorySection = (props) => {
    const category = props.category;
    const alternateColor = props.alternateColor ?? false;

    return (
      <div className="category-section">
         <h3>{category.title}</h3>
         <p>{category.description}</p>
         <div className="recipe-cards-container">
         {category.recipeList.map(r => {
            return (
              
                <div className="recipe-card" style={{ backgroundColor: alternateColor ? '#ffffff' : ' #2d8144', border: '1px solid #E2E2E2', borderStyle: alternateColor ? 'solid' : 'none'}}>
                <img src={r.image} alt={r.title} />
                <div className="recipe-extras">
               <h3>{r.title}</h3>
            
               <p>{r.numberOfIngredients} Ingredients</p>
               <p>{r.prepTime} Minutes</p>
                </div>
                </div>
            )
         })}
          </div>
      
      </div>
    );
  }
  
  export default CategorySection;
  