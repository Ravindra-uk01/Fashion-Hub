import "../styles/slider.css";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider_arrow left">
        <span className="material-icons"><ArrowLeftOutlinedIcon/></span>
      </div>
      {/* <div className="slider_container"> */}
        {/* <div className="slider_item">
          <div className="slider_image">
            <img src="/hm6.jpg" alt="img1" />
          </div>
          <div className="slider_info">
            <h1>WINTER SALE</h1>
            <h2>DON'T COMPROMISE ON STYLE!</h2>
            <button>SHOP NOW</button>
          </div>
        </div> */}
      {/* </div> */}
      <div className="slider_arrow right">
        <span className="material-icons"><ArrowRightOutlinedIcon/></span>
      </div>
    </div>
  );
};

export default Slider;
