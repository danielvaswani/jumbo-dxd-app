import React from "react";
import Carousel from './Carousel';
import RecipeCarousel from "./RecipeCarousel";
import RecipesDataExample from "./RecipesDataExample";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Carousel  />
      <RecipeCarousel />
      <RecipesDataExample />
    </div>
  );
}

export default App;
