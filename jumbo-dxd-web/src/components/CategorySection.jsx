
import React from "react";
import "./CategorySection.css";


const CategorySection = (props) => {
    const category = props.category;

    return (
      <div className="category-section">
         <h3>{category.title}</h3>
         <p>{category.description}</p>
         <div className="recipe-cards-container">
         {category.recipeList.map(r => {
            return (
              
                <div className="recipe-card">
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
  