import { useEffect, useState } from 'react'
import './App.css'
import './RecipePage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import PastaPesto from './img/recipePic.png';

import RecipePage from './RecipePage'

function App() {
  // const [count, setCount] = useState(0)
  // let [recipes, setRecipes] = useState([])

  // useEffect(() => {
  //   //fetch recipes from recipes-oct-2.json
  //     const data = fetch('./recipes-oct-2.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setRecipes([recipes, data])
  //     })
  //   }, [])

  const recipes = [
  {
    ingredients: [
      "400 g of your favourite spaghetti",
      <span className="green-leaf"><FontAwesomeIcon icon={faLeaf} /> 1 cup of fresh basil leaves</span>,
      <span className="green-leaf"><FontAwesomeIcon icon={faLeaf} /> 4 garlic cloves</span>,
      "1/4 cup olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook 400 g pasta according to the instructions on the package.",
      "While the pasta is cooking, chop about 6-8 tomatoes, use 1 cup fresh basil leaves and mince 4 garlic cloves.",
      "In a pan, heat 1/4 cup of olive oil over medium heat, then add the chopped garlic and fry for a minute.",
      "Add the chopped tomatoes and cook for a few minutes until soft.",
      "Stir in the fresh basil and season with salt and pepper.",
      "Mix the cooked pasta with the tomato basil sauce.",
      "Serve and, if desired, sprinkle with grated Parmesan cheese."
    ],
    title: "Spaghetti with Tomato Basil Sauce",
    image: PastaPesto,
    servings: 4,
    dishType: "Main Dish",
    cookingTime: 30,
  }
  ]

  return (
    <>
    <RecipePage 
    ingredients={recipes[0].ingredients} 
    instructions={recipes[0].instructions} 
    title={recipes[0].title} 
    image={recipes[0].image} 
    servings={recipes[0].servings} 
    dishType={recipes[0].dishType} 
    cookingTime={recipes[0].cookingTime}
    />
    </>
  )
}

export default App;
