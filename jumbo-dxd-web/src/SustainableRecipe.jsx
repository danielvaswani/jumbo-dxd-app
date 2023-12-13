import React from "react";
import "./SustainableRecipe.css";
import DeliciouslyClever from "./components/DeliciouslyClever";
import header from "./img/sustainable-header.png";
import SearchBar from "./components/searchbar";
import CategorySection from "./components/CategorySection";
import { useEffect, useState } from "react";
import { getRecipes } from "./store/recipes";
import { useNavigate } from "react-router-dom";
import { generateContent } from "./store/aiRecipeGenerator.js";

const tags = [
  "Under 30",
  "Breakfast",
  "Lunch",
  "Dessert",
  "Dinner",
  "Snack",
  "Hearty",
  "Cold",
];

const SustainableRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [preferences, setPreferences] = useState([
    "Vegetarian",
    "Vegan",
    "Spicy",
  ]);

  const [aiRecipeList, setAIRecipeList] = useState([]);

  const aiRecipeCategory = {
    title: "Familiar recipes",
    description: "These recipes really fit you!",
    recipeList: aiRecipeList,
  };

  const mockRecipeList = [
    {
      image:
        "https://www.jumbo.com/~/media/images/jumbo-2020/recipes/week-41/week-41-recipe-1.jpg?h=250&la=en&w=250",
      title: "Pasta Carbonara",
      description: "A classic Italian pasta dish.",
      numberOfIngredients: 5,
      cookingTime: 30,
    },
  ];

  const addPreference = (preference) => {
    setPreferences([...preferences, preference]);
    generateAIRecipes();
  };

  const generateAIRecipes = async () => {
    const prompt =
      "Can you generate 15 recipes that is " +
      preferences.join(", ") +
      " in the format of " +
      JSON.stringify(mockRecipeList);
    // const recipes = await generateContent(prompt);
    setAIRecipeList(recipes);
  };

  const removePreference = (preference) => {
    setPreferences(preferences.filter((p) => p !== preference));
    generateAIRecipes();
  };

  const categories = [
    {
      title: "Seasonal Recipes",
      description: "The most delicious recipes at the moment.",
      recipeList: recipes.slice(0, 3),
    },
    // {
    //   title: "Comfort meals",
    //   description: "These recipes really make you happy.",
    //   recipeList: recipes.slice(4, 7),
    // },
    {
      title: "Done in 25 minutes",
      description: "Fast and yummy!",
      recipeList: recipes.slice(8, 11),
    },
    {
      title: "Challenging recipes",
      description: "Push yourself to try something new!",
      recipeList: recipes.slice(12, 15),
    },
  ];

  const favoriteRecipe = {
    title: "Favorite recipes",
    description: "These recipes really fit you!",
    recipeList: recipes.slice(15, 18),
  };

  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await getRecipes(0);
    setRecipes(data);
  };

  const openRecipe = (id) => {
    console.log(id);
    const recipe = recipes.find((recipe) => recipe._id === id);
    navigate(`/recipe/${id}`, { state: { recipe: recipe } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    generateAIRecipes();
  }, [preferences]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <DeliciouslyClever />
      <img alt="header" src={header}></img>
      <SearchBar />
      <div className="filter-tags">
        {tags.map((t) => (
          <span
            className="filter-tag"
            key={t}
            style={{
              border: `${preferences.indexOf(t) > 0 ? "2px" : "1px"} solid ${
                preferences.indexOf(t) > 0 ? "#2d8144" : "#000000"
              }`,
            }}
            onClick={() =>
              preferences.indexOf(t) > 0
                ? removePreference(t)
                : addPreference(t)
            }
          >
            {t}
          </span>
        ))}
      </div>
      <div className="cards flex flex-col gap-2">
        <h2 className="font-bold">What are we eating today?</h2>
        <p>Fast and healthy recipes</p>
        <p>
          Every day thinking about what to cook can be a challenge, especially
          when you want to quickly put a tasty and healthy meal on the table. At
          Jumbo, we're happy to assist you with recipes that meet these
          requirements.
        </p>
      </div>
      {aiRecipeList !== undefined && aiRecipeList.length > 0 && (
        <CategorySection category={aiRecipeCategory} />
      )}
      {categories.map((c) => (
        <CategorySection category={c} key={c.title} handleClick={openRecipe} />
      ))}
      <div className="cards flex flex-col gap-2">
        <h2 className="font-bold">Recipes for every occasion</h2>

        <p>
          A delicious recipe for a relaxing Sunday morning breakfast, a simple
          take-away lunch, a vegetarian pasta dish, and even fun baking recipes
          to make with kids - whatever you have in mind, Jumbo is ready to
          inspire you with a wide range of recipes ..
        </p>
      </div>
      <CategorySection category={favoriteRecipe} alternateColor />
      <button className="rounded-full bg-white text-center border-gray-200 mx-8 py-1 flex gap-2 justify-center items-center">
        See more favourite recipes
      </button>
    </div>
  );
};
export default SustainableRecipe;
