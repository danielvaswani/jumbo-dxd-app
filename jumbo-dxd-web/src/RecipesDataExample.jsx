import React from "react";
import { useEffect, useState } from "react";
import { getRecipes } from "./store/recipes";
import RecipePage from "./RecipePage";

const RecipesDataExample = () => {
  const [recipePage, setRecipePage] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const fetchData = async () => {
    const data = await getRecipes(recipePage);
    setRecipes(data);
    setCurrentRecipe(data[0]);
  };

  useEffect(() => {
    fetchData();
  }, [recipePage]);

  return (
    <>
      {!!currentRecipe && <RecipePage recipe={currentRecipe} />}

      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe._id} style={{ display: "flex" }}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title + " image"} />
        </div>
      ))}
    </>
  );
};

export default RecipesDataExample;
