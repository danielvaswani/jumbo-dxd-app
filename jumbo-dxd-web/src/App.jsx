import { useEffect, useState } from 'react'
import './App.css'
import './HomeScreen'
import HomeScreen from './HomeScreen'

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

  return (
    <>
    <HomeScreen />

    </>
  )
}

export default App;
