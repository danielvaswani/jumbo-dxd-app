import React, { useEffect, useState } from "react";
import "./Favoriterecipe.css";
import DeliciouslyClever from "./components/DeliciouslyClever";
import favoriteheader from "./img/favorite-header.png";
import SearchBar from "./components/searchbar";
import { addRecipeToFavorites, getFavorites, deleteRecipeFromFavorites } from "./store/recipes";

const Favoriterecipe  = () => {
  const [favorites, setFavorites] = useState([]);

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
       
      
  </div>
)

}
export default Favoriterecipe;