// HorizontalCarousel.jsx

import React from 'react';
import Slider from 'react-slick';

import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pastaImage from './assets/pasta1.jpeg';
import bannerImage from './assets/banner1.png';

const data = [
  {
    title: 'Cookie',
    text: 'Excluding fresh- and gingerbread',
    imageUrl: bannerImage,
  },
  {
    title: 'Cookie',
    text: 'Excluding fresh- and gingerbread',
    imageUrl: bannerImage,
  },
  {
    title: 'Cookie',
    text: 'Excluding fresh- and gingerbread',
    imageUrl: bannerImage,
  },
  {
    title: 'Cookie',
    text: 'Excluding fresh- and gingerbread',
    imageUrl: bannerImage,
  },
  
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
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
      <h1 className="carousel-title">Get points easily</h1>
      <p className="carousel-description">Get points by buying reward products</p>
      <Slider className='slider' {...settings}>
        {data.map((item, index) => (
          <div key={index} className="rounded-card">
            <img className='imageCard' src={item.imageUrl} alt={item.title} />
            <div className='cardContent'>
              <h2>{item.title}</h2>
              <p className='greydescription'>{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalCarousel;