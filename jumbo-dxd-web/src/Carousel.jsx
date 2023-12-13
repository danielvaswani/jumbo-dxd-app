// HorizontalCarousel.jsx

import React from "react";
import Slider from "react-slick";

import "./Carousel.css";
import pastaImage from "./assets/pasta1.jpeg";
import bannerImage from "./assets/banner1.png";

const getPointsData = [
  {
    title: "Cookie",
    text: "Excluding fresh- and gingerbread",
    imageUrl: bannerImage,
  },
  {
    title: "Cookie",
    text: "Excluding fresh- and gingerbread",
    imageUrl: bannerImage,
  },
  {
    title: "Cookie",
    text: "Excluding fresh- and gingerbread",
    imageUrl: bannerImage,
  },
  {
    title: "Cookie",
    text: "Excluding fresh- and gingerbread",
    imageUrl: bannerImage,
  },
];

const exchangePointsData = [
  {
    title: "Fettucine",
    text: "500 grams",
    imageUrl: pastaImage,
  },
  {
    title: "Spaghetti",
    text: "250 grams",
    imageUrl: pastaImage,
  },
  {
    title: "Cookie",
    text: "100 grams",
    imageUrl: pastaImage,
  },
  {
    title: "Cookie",
    text: "100 grams",
    imageUrl: pastaImage,
  },
];

const HorizontalCarousel = (props) => {
  const exchangePoints = props.exchangePoints ?? false;
  return (
    <div className="carousel-container w-screen flex overflow-x-scroll">
      {(exchangePoints ? exchangePointsData : getPointsData).map((item, index) => (
        <div key={index} className="border rounded-xl flex flex-col gap-2 p-5 mx-2">
          <div className="w-full flex items-center justify-center relative">
            <img
              className="imageCard mb-2 w-20 h-20"
              src={item.imageUrl}
              alt={item.title}
            />
            {exchangePoints && <div className="absolute bottom-0 left-0 text-white bg-red-600 font-extrabold rounded px-1 tracking-wide">Free</div>}
          </div>
          <div className="cardContent w-32 flex flex-col">
            <h2>{item.title}</h2>
            <p className="greydescription">{item.text}</p>
          </div>
            {exchangePoints && <p className="text-sm self-end"><span className="font-bold">{Math.round(Math.random(1) * 1000)}</span> points</p>}
        </div>
      ))}
    </div>
  );
};

export default HorizontalCarousel;
