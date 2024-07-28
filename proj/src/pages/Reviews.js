import React from "react";
import Slider from "react-slick";
import "./Reviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    "review1.jpg",
    "review2.jpg",
    "review3.jpg",
    "review4.jpg",
    "review5.jpg"
  ];

const ReviewCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="review-slide">
          <img src={image} alt={`Review ${index + 1}`} className="review-image" />
        </div>
      ))}
    </Slider>
  );
};

function Reviews() {
  return (
    <div className="reviews-background">
      <div className="reviews-content">
      <div className="review-page-header">Customer Reviews</div>
        <ReviewCarousel />
      </div>
    </div>
  );
}

export default Reviews;
