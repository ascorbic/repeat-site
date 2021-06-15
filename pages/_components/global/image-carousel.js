import React, { useEffect } from "react";
import Slider from "react-slick";

function classNames(...classes) {
  console.log(classes);
  return classes.filter(Boolean).join(" ");
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={classNames(className, "absolute top-1/3 right-10 text-repeat rounded-full")} onClick={onClick} />;
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={classNames(className, "absolute top-1/3 left-10 text-repeat rounded-full z-10")} onClick={onClick} />;
  return <div className={className} style={{ ...style, display: "block", background: "green" }} onClick={onClick} />;
}

const settings = {
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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

const ImageCarousel = ({ header, slides }) => {
  return (
    <div>
      <h2>{header}</h2>
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i}>
            <img src={slide.image} alt="" />
            <div>{slide.caption}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
