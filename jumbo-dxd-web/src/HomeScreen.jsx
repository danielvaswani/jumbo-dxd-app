import React from "react";
import './HomeScreen.css'
import CustomerCard from './img/QrCode.png'
import Points from './img/Points.png'
import food1 from './img/image 4.png'
import food2 from './img/image 5.png'
import RewardProduct from "./components/RewardProduct";
import HorizontalCarousel from "./Carousel";
import RecipeCarousel from "./RecipeCarousel";
import RecipesDataExample from "./RecipesDataExample";
import { useNavigate } from "react-router-dom";

import './index.css'

const RewardProducts = [{title: "Cookie"}, {title: "Beans"}, {title: "Pizza"}]

const HomeScreen = () => {
  const navigate = useNavigate();
  const openSustainable = () => {
    navigate(`/sustainable/`);
  };
  
    return(
<>
<div className="homepage">
  <div className="header">
    <img src={CustomerCard} alt={CustomerCard} />
    <img src={Points} alt={Points} />
    <div className="flex-btn"> <button className="refresh-btn">Refresh</button></div>
   
  </div>
  <div className="content">
   
    <button onClick={openSustainable} className="personalized-recipe-btn">
      <div className="text-container">
        <div className="p-1">Deliciously clever!</div>
        <div className="p-2">Your recipes in your style!</div>
      </div>
      <div className="image-container-1">
        <img src={food1} alt={food1} />
      </div>
      <div className="image-container-2">
        <img src={food2} alt={food2} />
      </div>
</button>
  
</div>


  <HorizontalCarousel/>
  <RecipeCarousel />

<div className="py-44"> 

      {/* {RewardProducts.map((product) => (
        <RewardProduct title={product.title} image={product.image} description={product.description} />
      ))} */}
      </div>
      <button>Check out all rewardproducts</button>

</div>
<RecipesDataExample />
</>
    )

}

export default HomeScreen;