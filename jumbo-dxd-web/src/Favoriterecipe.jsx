import React from "react";
import "./Favoriterecipe.css";
import DeliciouslyClever from "./components/DeliciouslyClever";
import favoriteheader from "./img/favorite-header.png";
import SearchBar from "./components/searchbar";
const Favoriterecipe  = () => {
return(
    <div className="FavoriteRecipe">
        <DeliciouslyClever/>
        <img src={favoriteheader} alt="" />
        <SearchBar/>
       
      
  </div>
)

}
export default Favoriterecipe;