import React from "react";
import { useEffect, useState } from "react";
import { getRecipes } from "./store/recipes";
import { useNavigate } from "react-router-dom";

const RecipesDataExample = () => {
  const [recipePage, setRecipePage] = useState(1);
  const [recipes, setRecipes] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await getRecipes(recipePage);
    setRecipes(data);
  };

  const openRecipe = (event, id) => {
    const recipe = recipes.find((recipe) => recipe._id === id);
    navigate(`/recipe/${id}`, { state: { recipe: recipe } });
  };

  useEffect(() => {
    fetchData();
  }, [recipePage]);

  return (
    <>
      {/* {currentRecipe && <RecipePage recipe={currentRecipe} />} */}
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div
          key={recipe._id}
          style={{ display: "flex" }}
          onClick={(event) => openRecipe(event, recipe._id)}
        >
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title + " image"} />
        </div>
      ))}
    </>
  );
};

export default RecipesDataExample;
