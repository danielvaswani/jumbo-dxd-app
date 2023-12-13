import React from "react";
import "./SustainableRecipe.css";
import DeliciouslyClever from "./components/DeliciouslyClever";
import header from "./img/sustainable-header.png";
import SearchBar from "./components/searchbar";
import CategorySection from "./components/CategorySection";

const tags = ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6"];
const mockRecipeList = [
  {
    image: "",
    title: "Vegetarian tacos with guacamole",
    numberOfIngredients: 6,
    prepTime: 20,
  },
  {
    image: "",
    title: "Veal medallions with vegetables",
    numberOfIngredients: 6,
    prepTime: 20,
  },
  {
    image: "",
    title: "Salmon with asparagus",
    numberOfIngredients: 6,
    prepTime: 20,
  },
];

const categories = [
  {
    title: "Seasonal Recipes",
    description: "The most delicious recipes at the moment.",
    recipeList: mockRecipeList,
  },
  {
    title: "Comfort meals",
    description: "These recipes really make you happy.",
    recipeList: mockRecipeList,
  },
  {
    title: "Done in 25 minutes",
    description: "Fast and yummy!",
    recipeList: mockRecipeList,
  },
  {
    title: "Challenging recipes",
    description: "Push yourself to try something new!",
    recipeList: mockRecipeList,
  },
];

const favoriteRecipe = {
  title: "Favorite recipes",
  description: "These recipes really fit you!",
  recipeList: mockRecipeList,
};

const SustainableRecipe = () => {
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
          <span className="filter-tag">{t}</span>
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
      {categories.map((c) => (
        <CategorySection category={c} />
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
      <button className="rounded-full bg-white text-center border-gray-200 mx-8 py-1 flex gap-2 justify-center items-center"
      >
        See more favourite recipes
      </button>
    </div>
  );
};
export default SustainableRecipe;
