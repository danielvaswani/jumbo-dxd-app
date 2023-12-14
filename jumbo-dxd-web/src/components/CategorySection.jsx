import React, { useEffect } from "react";
import "./CategorySection.css";
import { RecipeCard } from "../components/RecipeCard";

const CategorySection = (props) => {
  const category = props.category;
  const alternateColor = props.alternateColor ?? false;
  const handleClick = props.handleClick;

  useEffect(() => {
    console.log(category.recipeList);
  }, []);

  return (
    <div className="category-section flex flex-col gap-2">
      <h3 className="font-bold">{category.title}</h3>
      <p>{category.description}</p>
      <div className="recipe-cards-container overflow-x-scroll">
        {category.recipeList.map((r) => {
          return (
            <RecipeCard
              recipe={r}
              alternateColor={alternateColor}
              handleClick={handleClick}
            ></RecipeCard>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySection;
