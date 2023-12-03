import { useEffect, useState } from "react";
import "./App.css";
import { getRecipes } from "./store/recipes";

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

  return (
    <>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe._id} style={{ display: "flex" }}>
          <h2>{recipe.title}</h2>
          <img src={recipe.imageInfo[0].url} alt={recipe.title + " image"} />
        </div>
      ))}
    </>
  );
}

export default App;
