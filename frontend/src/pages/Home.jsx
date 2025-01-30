import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import "../styles/home.css";

const Home = () => {
  return (
    <div className='home_container'>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
    </div>
  )
}

export default Home;