import "../styles/slider.css";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from "../data";
import { useState } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleSlideClick = (direction) => { 
      if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
      }
      else{ 
        setSlideIndex(slideIndex < 2? slideIndex+1 : 0);
      }
  }

  return (
    <div className="slider">
      <div className="slider_arrow left" onClick={()=>handleSlideClick("left")}>
        <span className="material-icons"><ArrowLeftOutlinedIcon/></span>
      </div>
      <div className="slider_container" style={{transform:`translateX(-${slideIndex * 100}vw)`}}>
        {sliderItems && sliderItems.length>0 && sliderItems.map((item) =>{
          return (
          <div className="slider_item" style={{backgroundColor:`#${item.bg}`}} key={item.id} >
            <div className="slider_image">
              <img src={item.img} alt="img1" />
            </div>
            <div className="slider_info">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button>SHOP NOW</button>
            </div>
          </div>
          )
        })
        }
      </div>
      <div className="slider_arrow right" onClick={()=>handleSlideClick("right")}>
        <span className="material-icons"><ArrowRightOutlinedIcon/></span>
      </div>
    </div>
  );
};

export default Slider;
