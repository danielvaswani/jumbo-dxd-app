import React from 'react';
import Slider from 'react-slick';

import './RecipeCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pastaImage from './assets/pasta1.jpeg';

const data = [
  {
   title: 'Classic tomato basil pasta',
    text: 'Excluding fresh- and gingerbread',
    imageUrl: pastaImage,
  },
  {
    title: 'Classic tomato basil pasta',
     text: 'Excluding fresh- and gingerbread',
     imageUrl: pastaImage,
   },
   {
    title: 'Classic tomato basil pasta',
     text: 'Excluding fresh- and gingerbread',
     imageUrl: pastaImage,
   },
   {
    title: 'Classic tomato basil pasta',
     text: 'Excluding fresh- and gingerbread',
     imageUrl: pastaImage,
   },
//  more recipes 
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: true,
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

const HorizontalCarousel = () => {
  return (
    <div className="carousel-container">
      <h1 className="carousel-title">Seasonal Recipes</h1>
      <p className="carousel-description">The most delicious recipes at the moment.</p>
      <Slider className='slider' {...settings}>
        {data.map((item, index) => (
          <div key={index} className="rounded-card green-card">
            <div className='imageCard'>
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className='cardContent'>
              <h2 className='cardTitle'>{item.title}</h2>
              <p className='greydescription'>{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalCarousel;
