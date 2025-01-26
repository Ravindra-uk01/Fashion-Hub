import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import "../styles/home.css";

const Home = () => {
  return (
    <div className='home_container'>
        <Announcement/>
        <Navbar/>
    </div>
  )
}

export default Home;