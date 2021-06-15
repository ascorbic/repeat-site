import React, { Component } from "react";
import Slider from "react-slick";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
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
    return (
      <div className="relative">
        <span className="absolute cursor-pointer z-10 left-5 top-1/4 active:ring-0 focus:ring-0" onClick={this.previous}>
          <img className="shadow-md rounded-full" src="/images/bumper-left.svg" alt="" />
        </span>
        <span className="absolute cursor-pointer z-10 right-5 top-1/4" onClick={this.next}>
          <img className="shadow-md rounded-full" src="/images/bumper-right.svg" alt="" />
        </span>
        <h2>{this.props.header}</h2>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this.props.slides.map((slide, i) => (
            <div className="px-2" key={i}>
              <img src={slide.image} alt="" />
              <div>{slide.caption}</div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

// import React, { useEffect } from "react";
// import Slider from "react-slick";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return <div className={classNames(className, "absolute top-1/3 right-10 text-repeat rounded-full")} onClick={onClick} />;
// }

// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return <div className={classNames(className, "absolute top-1/3 left-10 text-repeat rounded-full z-10")} onClick={onClick} />;
//   return <div className={className} style={{ ...style, display: "block", background: "green" }} onClick={onClick} />;
// }

// const ImageCarousel = ({ header, slides }) => {
//   let slider = new Slider();
//   setTimeout(() => {
//     slider.slickNext();
//   }, 10000);
//   return (
//     <div>

//       <Slider {...settings}>
//         {slides.map((slide, i) => (
//           <div key={i}>
//             <img src={slide.image} alt="" />
//             <div>{slide.caption}</div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageCarousel;
