// RecipeCarousel.jsx
import React from 'react';
import Slider from 'react-slick';

import './RecipeCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pastaImage from './assets/pasta1.jpeg';

const data = [
  {
    title: '1 Classic tomato basil pasta',
    text: 'Excluding fresh- and gingerbread',
    imageUrl: pastaImage,
  },
  {
    title: '2 Classic tomato basil pasta',
    text: 'Excluding fresh- and gingerbread',
    imageUrl: pastaImage,
  },
  
  // more recipes
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 390,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const RecipeCarousel = () => {
  return (
    <div className="carousel-container">
      <h1 className="carousel-title">Seasonal Recipes</h1>
      <p className="carousel-description">The most delicious recipes.</p>
      <Slider className='slider' {...settings}>
        {data.map((item, index) => (
           <div key={index} className="rounded-card green-card">
           <img className='imageCard' src={item.imageUrl} alt={item.title} />
           <div className='cardContent'>
             <h2 className='itemtitle'>{item.title}</h2>
             <p className='greydescription'>{item.text}</p>
           </div>
         </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecipeCarousel;
