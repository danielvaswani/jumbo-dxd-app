import { useEffect, useState } from "react";
import "./App.css";
import "./RecipePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import PastaPesto from "./img/recipePic.png";
import { getRecipes } from "./store/recipes";

import RecipePage from "./RecipePage";

function App() {
  const [recipePage, setRecipePage] = useState(1);
  const [recipes, setRecipes] = useState([]);
  
  const fetchData = async () => {
    const data = await getRecipes(recipePage);
    console.log(data);
    setRecipes(data);
  };

  useEffect(() => {
    fetchData();
  }, [recipePage]);

  const handleNextPage = () => {
    setRecipePage(recipePage + 1);
  };

  const recipesHardCoded = [
    {
      ingredients: [
        "400 g of your favourite spaghetti",
        <span className="green-leaf">
          <FontAwesomeIcon icon={faLeaf} /> 1 cup of fresh basil leaves
        </span>,
        <span className="green-leaf">
          <FontAwesomeIcon icon={faLeaf} /> 4 garlic cloves
        </span>,
        "1/4 cup olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Cook 400 g pasta according to the instructions on the package.",
        "While the pasta is cooking, chop about 6-8 tomatoes, use 1 cup fresh basil leaves and mince 4 garlic cloves.",
        "In a pan, heat 1/4 cup of olive oil over medium heat, then add the chopped garlic and fry for a minute.",
        "Add the chopped tomatoes and cook for a few minutes until soft.",
        "Stir in the fresh basil and season with salt and pepper.",
        "Mix the cooked pasta with the tomato basil sauce.",
        "Serve and, if desired, sprinkle with grated Parmesan cheese.",
      ],
      title: "Spaghetti with Tomato Basil Sauce",
      image: PastaPesto,
      servings: 4,
      dishType: "Main Dish",
      cookingTime: 30,
    },
  ];

  return (
    <>
      <RecipePage
        ingredients={recipesHardCoded[0].ingredients}
        instructions={recipesHardCoded[0].instructions}
        title={recipesHardCoded[0].title}
        image={recipesHardCoded[0].image}
        servings={recipesHardCoded[0].servings}
        dishType={recipesHardCoded[0].dishType}
        cookingTime={recipesHardCoded[0].cookingTime}
      />

      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe._id} style={{ display: "flex" }}>
          <h2>{recipe.title}</h2>
          <img src={recipe.imageInfo[0].url} alt={recipe.title + " image"} />
        </div>
      ))
      }
    </>
  );
}

export default App;
