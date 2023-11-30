import React from "react";
import './HomeScreen.css'
import CustomerCard from './img/QrCode.png'
import Points from './img/Points.png'
import food1 from './img/image 4.png'
import food2 from './img/image 5.png'
import RewardProduct from "./components/RewardProduct";

const RewardProducts = [{title: "Cookie"}, {title: "Beans"}, {title: "Pizza"}]

const HomeScreen = () => {
    return(
<div className="homepage">
  <div className="header">
    <img src={CustomerCard} alt={CustomerCard} />
    <img src={Points} alt={Points} />
    <button className="refresh-btn">Refresh</button>
  </div>
  <div className="content">
   
    <button className="personalized-recipe-btn">
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
<div className="product-container">
      {RewardProducts.map((product) => (
        <RewardProduct title={product.title} image={product.image} description={product.description} />
      ))}
      </div>
      <button>Check out all rewardproducts</button>

</div>
    )

}

export default HomeScreen;