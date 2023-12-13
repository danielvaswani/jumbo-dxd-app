import React from "react";
import "./CategorySection.css";

const CategorySection = (props) => {
  const category = props.category;
  const alternateColor = props.alternateColor ?? false;

  return (
    <div className="category-section flex flex-col gap-2">
      <h3 className="font-bold">{category.title}</h3>
      <p>{category.description}</p>
      <div className="recipe-cards-container">
        {category.recipeList.map((r) => {
          return (
            <div
              className="recipe-card gap-3"
              style={{
                backgroundColor: alternateColor ? "#ffffff" : " #2d8144",
                border: "1px solid #E2E2E2",
                borderStyle: alternateColor ? "solid" : "none",
              }}
            >
              <img src={r.image} alt={r.title} />
              <div className="recipe-extras">
                <h3 className="font-bold">{r.title}</h3>

                <p className="text-xs">{r.numberOfIngredients} Ingredients</p>
                <p className="text-xs">{r.prepTime} Minutes</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySection;
