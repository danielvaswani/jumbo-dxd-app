import { useEffect, useState } from 'react'
import './App.css'
import './RecipePage'
import RecipePage from './RecipePage'

function App() {
  const [count, setCount] = useState(0)
  let [recipes, setRecipes] = useState([])

  useEffect(() => {
    //fetch recipes from recipes-oct-2.json
      const data = fetch('./recipes-oct-2.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setRecipes([recipes, data])
      })
    }, [])

  return (
    <>
    <RecipePage/>

      {recipes[0]}
    </>
  )
}

export default App;
