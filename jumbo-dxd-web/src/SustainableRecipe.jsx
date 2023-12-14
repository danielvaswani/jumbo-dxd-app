import React from "react";
import "./SustainableRecipe.css";
import DeliciouslyClever from "./components/DeliciouslyClever";
import header from "./img/sustainable-header.png";
import SearchBar from "./components/searchbar";
import CategorySection from "./components/CategorySection";
import { useEffect, useState, useCallback } from "react";
import { getRecipes } from "./store/recipes";
import { useNavigate } from "react-router-dom";
import { generateContent } from "./store/aiRecipeGenerator.js";

import apple from "./assets/apple.jpg";
import burger from "./assets/burger.jpg";
import kitchen from "./assets/kitchen.jpg";
import oven from "./assets/oven.jpg";
import plate from "./assets/plate.jpg";
import salad from "./assets/saladbowl.jpg";
import tea from "./assets/tea.jpg";

const images = [apple, burger, kitchen, oven, plate, salad, tea];

const tags = [
  "Spicy",
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
      _id: "pasta-carbonara-ai",
      image:
        "https://www.jumbo.com/~/media/images/jumbo-2020/recipes/week-41/week-41-recipe-1.jpg?h=250&la=en&w=250",
      title: "Pasta Carbonara",
      description: "A classic Italian pasta dish.",
      numberOfIngredients: 5,
      cookingTime: 30,
      ingredients: [
        "400 g of  spaghetti",
        "1 cup of fresh basil leaves",
        "4 garlic cloves",
        "1/4 cup olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Cook 400 g pasta according to the instructions on the package.",
        "While the pasta is cooking, chop about 6-8 tomatoes, use 1 cup fresh basil leaves and mince 4 garlic cloves.",
        "In a pan, heat 1/4 cup of olive oil over medium heat, then add the chopped garlic and fry for a minute.",
        "Add the chopped tomatoes and cook for a few minutes until soft.",
        "Stir in the fresh basil and season with salt and pepper.",
        "Mix the cooked pasta with the tomato basil sauce.",
        "Serve and, if desired, sprinkle with grated Parmesan cheese.",
      ],
      dishType: "Main Dish",
      servings: 4,
    },
  ];

  const addPreference = (preference) => {
    setPreferences([...preferences, preference]);
    generateAIRecipes();
  };

  const generateAIRecipes = async () => {
    const prompt =
      "Do not include any explanation, I need a predictable JSON response, generate 5 recipes that is " +
      preferences.join(", ") +
      " in the format of " +
      JSON.stringify(mockRecipeList);
    const recipes = await generateContent(prompt);
    console.log(recipes);
    // setAIRecipeList(recipes);
    if (recipes !== undefined && recipes.length > 0) {
      const withRandomImages = recipes.map((r) => ({
        ...r,
        image: images[Math.floor(Math.random() * images.length)],
      }));
      return withRandomImages;
    }
    return recipes;
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

  const fetchDataMemoized = useCallback(() => {
    generateAIRecipes().then((result) => {
      setAIRecipeList(result);
      console.log(result);
    });
  }, [preferences]);

  const openRecipe = (id) => {
    console.log(id);
    const recipe =
      recipes.find((recipe) => recipe._id === id) ??
      aiRecipeList.find((recipe) => recipe._id === id);
    navigate(`/recipe/${id}`, { state: { recipe: recipe } });
  };
  const openFavorite = () => {
    navigate(`/favorite/`);};

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchDataMemoized();
  }, [fetchDataMemoized, preferences]);

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
      {aiRecipeList !== undefined && !!aiRecipeList.length && (
        <CategorySection category={aiRecipeCategory} handleClick={openRecipe} />
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
      <button onClick={openFavorite} className="rounded-full bg-white text-center border-gray-200 mx-8 py-1 flex gap-2 justify-center items-center">
        See more favourite recipes
      </button>
    </div>
  );
};
export default SustainableRecipe;
