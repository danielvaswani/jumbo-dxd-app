import {
    createBrowserRouter,
  } from "react-router-dom";
import RecipePage from "../RecipePage.jsx";
import Root from "./root.jsx";
  
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
  ]);


  export default router;