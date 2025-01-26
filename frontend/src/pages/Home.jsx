import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import "../styles/home.css";

const Home = () => {
  return (
    <div className='home_container'>
        <Announcement/>
        <Navbar/>
        <Slider/>
    </div>
  )
}

export default Home;