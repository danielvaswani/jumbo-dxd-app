import React, { useRef, useState, useEffect } from "react";
import { generateContent } from "./store/aiRecipeGenerator.js";

const AiGeneratedRecipe = () => {
  const [image_url, setImage_url] = useState("/");
  const [generatedDescription, setGeneratedDescription] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // declare the data fetching function
    const generateRecipe = async () => {
      const recipes = [
        "Pasta Carbonara",
        "Chicken Stir-Fry",
        "Vegetable Lasagna",
        "Chocolate Cake",
        // Add more recipe prompts as needed
      ];

      const randomIndex = Math.floor(Math.random() * recipes.length);
      const randomRecipe = recipes[randomIndex];
      const generatedContent = await generateContent(randomRecipe);
      setImage_url(generatedContent.imageUrl);
      setGeneratedDescription(generatedContent.description);
    };

    // call the function
    generateRecipe()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div className="ai-image-generator">
      <div className="header">
        Ai Recipe <span>Generator</span>
      </div>
      <div className="search-box">
        <div className="image">
          <img src={image_url} alt="Generated Image" />
        </div>
      </div>
      <div>
        <h3>Generated Description:</h3>
        <p>{generatedDescription}</p>
      </div>
    </div>
  );
};

export default AiGeneratedRecipe;
