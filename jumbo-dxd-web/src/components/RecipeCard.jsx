import React, { useState, useEffect } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  addRecipeToFavorites,
  getIsHearted,
  deleteRecipeFromFavorites,
} from "../store/recipes";

export const RecipeCard = (props) => {
  const r = props.recipe;
  const alternateColor = props.alternateColor ?? false;
  const handleClick = props.handleClick;
  const [heart, setHeart] = useState(false);

  const heartColor = {
    color: heart ? "#ff0000" : "#ffffff",
  };

  useEffect(() => {
    const fetchHeart = async () => {
      const data = await getIsHearted(r);
      setHeart(data);
    };

    fetchHeart().then((result) => {
      console.log(result);
    });
  }, []);

  const toggleHeart = async (e) => {
    console.log("toggle heart");
    e.stopPropagation();
    const isHearted = await getIsHearted(r);
    if (isHearted === true) {
        console.log("deleting " + r._id);
      deleteRecipeFromFavorites(r).then((result) => {
        setHeart(false);
      });
    } else {
      addRecipeToFavorites(r).then((result) => {
        setHeart(true);
      });
    }
  };

  return (
    <div
      className={`rounded-xl flex items-center gap-3 p-2 ${
        alternateColor ? "bg-white" : "bg-green-500"
      }`}
      style={{
        backgroundColor: alternateColor ? "#ffffff" : " #2d8144",
        border: "1px solid #E2E2E2",
        borderStyle: alternateColor ? "solid" : "none",
      }}
      key={r._id}
      onClick={() => handleClick(r._id)}
    >
      <div onClick={toggleHeart} style={{ cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={heart ? "pink" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={heart ? "pink" : "white"}
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
      <img src={r.image} className="w-24 h-24 rounded-xl" alt={r.title} />
      <div className="recipe-extras w-48">
        <h3
          className="text-sm font-bold"
          style={{ color: alternateColor ? "#000000" : "#ffffff" }}
        >
          {r.title}
        </h3>

        <p
          className="text-xs"
          style={{ color: alternateColor ? "#000000" : "#ffffff" }}
        >
          {r.numberOfIngredients} Ingredients
        </p>
        <p
          className="text-xs"
          style={{ color: alternateColor ? "#000000" : "#ffffff" }}
        >
          {r.cookingTime} Minutes
        </p>
      </div>
    </div>
  );
};
