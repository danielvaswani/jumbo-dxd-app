import React from "react";
import Carousel from './Carousel';
import RecipeCarousel from "./RecipeCarousel";
import RecipesDataExample from "./RecipesDataExample";
import "./App.css";
import HomeScreen from './HomeScreen'

function App() {
  return (
    <div className="App">
      <Carousel  />
      <RecipeCarousel />
      <RecipesDataExample />
      <HomeScreen />
    </div>
  );
}

export default App;
