import {
    createBrowserRouter,
  } from "react-router-dom";
import RecipePage from "../RecipePage.jsx";
import Root from "./root.jsx";
import SustainableRecipe from "../SustainableRecipe.jsx";
import AiGeneratedRecipe from "../AiGeneratedRecipe.jsx"
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <h1>404 Not Found</h1>,
    },
    {
      path: "/recipe/:recipeId",
      element: <RecipePage/>
    },
    {
      path: "/sustainable",
      element: <SustainableRecipe/>
    },
    {
      path: "/aiRecipe",
      element: <AiGeneratedRecipe/>
    },

  ]);


  export default router;