import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "../../assets/data/cardslick";
import slickimg from "../../assets/all-images/cycleimg/road.jpeg";

function Cardslick() {
  const [defaultImage, setDefaultImage] = useState({});

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: slickimg,
    }));
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings} className="slick-slider">
          {dataDigitalBestSeller.map((item) => (
            <div key={item.id} className="px-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96 w-full">
                <div className="relative h-full">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={
                      defaultImage[item.title] === item.title
                        ? defaultImage.linkDefault
                        : item.linkImg
                    }
                    alt={item.title}
                    onError={handleErrorImage}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                    <h2 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h2>
                    <p className="text-md font-bold text-yellow-400 mb-2">
                      {item.price}
                    </p>
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full mb-2">
                      {item.category}
                    </span>
                    <Link
                      to="/shop"
                      className="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-blue-100 transition duration-300"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Cardslick;
