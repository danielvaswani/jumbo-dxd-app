// HorizontalCarousel.jsx

import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pastaImage from './assets/pasta1.jpeg';
import bannerImage from './assets/banner1.png';

const data = [
  {
    id: 1,
    title: 'Cookie',
    text: 'Excluding fresh- and gingerbread',
    imageUrl: bannerImage,
  },
  {
    id: 2,
    title: 'Cookie',
    text: 'Excluding fresh- and gingerbread',
    imageUrl: bannerImage,
  },
  {
    id: 3,
    title: 'Cookie',
    text: 'Excluding fresh- and gingerbread',
    imageUrl: bannerImage,
  },
  {
    id: 4,
    title: 'Cookie',
    text: 'Excluding fresh- and gingerbread',
    imageUrl: bannerImage,
  },
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
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 4,
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
        {data.map((item) => (
          <Link key={item.id} to={`/details/${item.id}`} className="card-link">
            <div className="rounded-card">
              <img className='imageCard' src={item.imageUrl} alt={item.title} />
              <div className='cardContent'>
                <h2>{item.title}</h2>
                <p className='greydescription'>{item.text}</p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalCarousel;
