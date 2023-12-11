
import React from "react";
import "./CategorySection.css";


const CategorySection = (props) => {
    const category = props.category;

    return (
      <div className="category-section">
         <h2>{category.title}</h2>
         <p>{category.description}</p>
         {category.recipeList.map(r => {
            return (
                <div className="recipe-card">
                <img src={r.image} alt={r.title} />
               <h2>{r.title}</h2>
               <p>{r.description}</p>
                </div>
            )
         })}
       
      
      </div>
    );
  }
  
  export default CategorySection;
  