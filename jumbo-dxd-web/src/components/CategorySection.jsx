import React from "react";
import "./CategorySection.css";

const CategorySection = (props) => {
  const category = props.category;
  const alternateColor = props.alternateColor ?? false;
  const handleClick = props.handleClick;

  const addPreference = (preference) => {
    setPreferences([...preferences, preference]);
  };
  return (
    <div className="category-section flex flex-col gap-2">
      <h3 className="font-bold">{category.title}</h3>
      <p>{category.description}</p>
      <div className="recipe-cards-container overflow-x-scroll">
        {category.recipeList.map((r) => {
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
              <img
                src={r.image}
                className="w-24 h-24 rounded-xl"
                alt={r.title}
              />
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
        })}
      </div>
    </div>
  );
};

export default CategorySection;
