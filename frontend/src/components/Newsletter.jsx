import SendIcon from '@mui/icons-material/Send';
import "../styles/newsletter.css"

const Newsletter = () => {
  return (
    <div className="newsletter" >
        <h1>Newsletter</h1>
        <p>Sign up for our newsletter to receive updates on new products, sales, and more!</p>
        <div className="inputContainer">
            <input type="email" placeholder="Enter Your Email" />
            <button className="button"><SendIcon/></button>
        </div>
    </div>
  )
}

export default Newsletter