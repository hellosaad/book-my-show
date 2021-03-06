import React from 'react'
import Slider from 'react-slick';
//components
import Poster from "../Poster/Poster.component";

///config
import PosterCarouselSettings from "../../config/PosterCarousel.config";
import Cast from '../Cast/Cast.component';
 const PosterSlider = (props) => {
  const sliderConfig = props.config ? props.config : PosterCarouselSettings;

    return (
      <>
        <div className="flex-col items-start py-2">
        <h3 className={`text-white text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
        <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
      </div>
      <Slider {...sliderConfig}>
        {props.images.map((image) => (
          <Poster {...image}  isDark={props.isDark}/>
        ))}
      </Slider> 
        </>
    )
};

export default PosterSlider
