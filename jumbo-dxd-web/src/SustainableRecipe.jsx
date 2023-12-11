import React from 'react';
import "./SustainableRecipe.css"
import DeliciouslyClever from './components/DeliciouslyClever';
import header from './img/sustainable-header.png';
import SearchBar from './components/searchbar';
import CategorySection from './components/CategorySection';


const tags = ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6",]
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
]

const categories = [
    {
        title: "Seasonal Recipes",
        description: "The most delicious recipes at the moment.",
        recipeList: mockRecipeList
    },
    {
        title: "Comfort meals",
        description: "These recipes really make you happy.",
        recipeList: mockRecipeList
    },
    {
        title: "Done in 25 minutes",
        description: "Fast and yummy!",
        recipeList: mockRecipeList
    },
    {
        title: "Challenging recipes",
        description: "Push yourself to try something new!",
        recipeList: mockRecipeList
    },
]

const SustainableRecipe=()=>{
return(
<div>
    <DeliciouslyClever/>
    <img alt='header' src={header}></img>
    <SearchBar/>
    <div className="filter-tags">
      {tags.map(t => <span className="filter-tag">{t}</span>)}
      
      </div>
      {
        categories.map(c => <CategorySection category={c} />)
      }
</div>
);
};
export default SustainableRecipe;