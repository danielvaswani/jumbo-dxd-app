import React from "react";
import "./HomeScreen.css";
import CustomerCard from "./img/QrCode.png";
import Points from "./img/Points.png";
import food1 from "./img/image 4.png";
import food2 from "./img/image 5.png";
import HorizontalCarousel from "./Carousel";
import { useNavigate } from "react-router-dom";
import { faPiggyBank, faGift} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

const RewardProducts = [
  { title: "Cookie" },
  { title: "Beans" },
  { title: "Pizza" },
];

const HomeScreen = () => {
  const navigate = useNavigate();
  const openSustainable = () => {
    navigate(`/sustainable/`);
  };

  return (
    <>
      <div className="homepage">
        <div className="header">
          <img src={CustomerCard} alt={CustomerCard} />
          <img src={Points} alt={Points} />
          <div className="flex-btn">
            {" "}
            <button className="refresh-btn">Refresh</button>
          </div>
        </div>
        <div className="content flex flex-col gap-3">
          <button onClick={openSustainable} className="personalized-recipe-btn">
            <div className="text-container">
              <div className="para-1">Deliciously clever!</div>
              <div className="para-2">Your recipes in your style!</div>
            </div>
            <div className="image-container-1">
              <img src={food1} alt={food1} />
            </div>
            <div className="image-container-2">
              <img src={food2} alt={food2} />
            </div>
          </button>
          <h1 className="carousel-title">Get points easily</h1>
          <p className="carousel-description">
            Get points by buying reward products
          </p>
          <h1 className="carousel-title self-center">
            <span className="font-bold">Exchange points</span> for extra's!
          </h1>
          <HorizontalCarousel />
          <button className="rounded-full bg-white text-center border-gray-200 p-0 py-1 flex gap-2 justify-center items-center">
           <FontAwesomeIcon icon={faPiggyBank}></FontAwesomeIcon> Check out all
            rewardproducts
          </button>
          <HorizontalCarousel exchangePoints />
          <button className="rounded-full bg-white text-center border-gray-200 p-0 py-1 flex gap-2 justify-center items-center">
            <FontAwesomeIcon icon={faGift}></FontAwesomeIcon>
            See all extra's
          </button>
        </div>
      </div>
      {/* <RecipeCarousel /> */}

      {/* <RecipesDataExample /> */}
    </>
  );
};

export default HomeScreen;
