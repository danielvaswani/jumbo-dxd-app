import React, { useEffect, useState } from "react";
import "./Favoriterecipe.css";
import DeliciouslyClever from "./components/DeliciouslyClever";
import favoriteheader from "./img/favorite-header.png";
import SearchBar from "./components/searchbar";
import { addRecipeToFavorites, getFavorites, deleteRecipeFromFavorites } from "./store/recipes";
import { RecipeCard } from "./components/RecipeCard";
import { useNavigate } from "react-router-dom";

const Favoriterecipe  = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await getFavorites();
      setFavorites(data);
    };

    fetchFavorites();
  }
  , []);

  const addToFavorites = (recipe) => {
    addRecipeToFavorites(recipe).then((result) => {
      console.log(result);
    });
  }

  const openRecipe = (id) => {
    console.log(id);
    const recipe = favorites.find((recipe) => recipe._id === id);
    navigate(`/recipe/${id}`, { state: { recipe: recipe } });
  };

  const deleteRecipe = (recipe) => {
    deleteRecipeFromFavorites(recipe).then((result) => {
      console.log(result);
    });
  }

return(
    <div className="FavoriteRecipe">
        <DeliciouslyClever/>
        <img src={favoriteheader} alt="" />
        <SearchBar/>
        <div className="px-4 flex flex-col gap-2 pt-2">
        {favorites.map((f, navisa) => {
          return <RecipeCard recipe={f} alternateColor={navisa % 2 == 0} handleClick={() => openRecipe(f._id)}/>
        })}</div>
      
  </div>
)

}
export default Favoriterecipe;