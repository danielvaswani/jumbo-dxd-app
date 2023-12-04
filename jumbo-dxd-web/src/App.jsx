import React from 'react';
import Carousel from './Carousel';
import './App.css';

function App() {
  const mockRecipes = [
    {
      title: 'Recipe 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'path-to-your-image-1.jpg',
    },
    {
      title: 'Recipe 2',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'path-to-your-image-2.jpg',
    },
    // Add more mock data as needed
  ];

  return (
    <div className="App">
      <Carousel data={mockRecipes} />
      
    </div>
  );
}

export default App;
