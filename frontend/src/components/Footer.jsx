import "../styles/footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Footer = () => {
  return (
    <div className="footer" >
        <div className="footer_left"> 
            <h1>FASHION HUB</h1>
            <p>Our mission is to provide top-quality products that exceed customer expectations.
                 We prioritize excellence, innovation, and customer satisfaction. 
                 By continuously improving our products and services, we aim to create a seamless shopping experience. With exceptional customer service at our core, we strive to build lasting relationships and ensure every purchase brings joy and value.
            </p>
            <div className="footer_icons">
                <div style={{backgroundColor: "#3B5999"}} >
                    <FacebookIcon/>
                </div>
                <div style={{backgroundColor: "#E4405F"}}>
                    <InstagramIcon/>
                </div>
                <div style={{backgroundColor: "#55ACEE"}}>
                    <TwitterIcon/>
                </div>
                <div style={{backgroundColor: "#E60023"}}>
                    <PinterestIcon/>
                </div>
            </div>
        </div>
        <div className="footer_center">
            <h3>Usefull Links</h3>
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>Man Fashion</li>
                <li>Woman Fashion</li>
                <li>Accessories</li>
                <li>My Account</li>
                <li>Order Tracking</li>
                <li>Wishlist</li>
                <li>Refer</li>
                <li>Terms</li>
            </ul>
        </div>
        <div className="footer_right">
            <h3>Contact Us</h3>
            <div className="footer_contact" ><PlaceIcon/> 12/24 Palika Bazaar, Cannought Place, DL 110001</div>
            <div className="footer_contact" ><LocalPhoneIcon/> +1 123 456 789</div>
            <div className="footer_contact" ><EmailOutlinedIcon/> royravirayal@gmail.com</div>
            
            <img src="https://i.ibb.co/Qfvn4z6/payment.png"  alt="payment" style={{width: "50%", margin: "0.4rem 0"}} />
        </div>
    </div>
  )
}

export default Footer