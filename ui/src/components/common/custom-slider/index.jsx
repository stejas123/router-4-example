import React, { Component } from 'react';

import Slider from 'react-slick';

import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

class CustomSlider extends Component {



	render() {
    let slideToShow = (window.innerWidth > 768) ? 4: (window.innerWidth > 480) ? 2 : 1
	  let settings = {
      dots: this.props.slides.length > slideToShow ? true : false,
      infinite: true,
      speed: 500,
      arrows: this.props.slides.length > 4 ? true : false,
      slidesToShow: slideToShow,
      slidesToScroll: slideToShow
    };

		return(
			 <Slider {...settings}>
        {this.props.slides}
      </Slider>
		);
	}
}

export default CustomSlider;
