import React from "react";
import Slider from "react-slick";
import "../../Styles/slideshow.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import s1 from "../../images/slide (1).jpg";
import s2 from "../../images/slide (2).jpg";
import s3 from "../../images/slide (3).jpg";
import s4 from "../../images/slide (4).jpg";
import s5 from "../../images/slide (5).jpg";
import s6 from "../../images/slide (6).jpg";

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      settings: {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "",
        slidesToShow: 3,
        speed: 5000,
        arrows: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 590,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className='container-fluid slider' id='slider'>
        <div className='row slider-row'>
          <Slider {...this.state.settings}>
            <div className='card mb-3'>
              <img className='card-img-top' src={s1} alt='Card' />
            </div>
            <div className='card mb-3'>
              <img className='card-img-top' src={s2} alt='Card' />
            </div>
            <div className='card mb-3'>
              <img className='card-img-top' src={s3} alt='Card' />
            </div>
            {/* <div className='card mb-3'>
              <img className='card-img-top' src={s4} alt='Card' />
            </div> */}
            <div className='card mb-3'>
              <img className='card-img-top' src={s5} alt='Card' />
            </div>
            <div className='card mb-3'>
              <img className='card-img-top' src={s6} alt='Card' />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default SimpleSlider;
