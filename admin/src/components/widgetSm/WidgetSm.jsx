import { Visibility } from '@mui/icons-material'
import './widgetSm.css'

const WidgetSm = () => {
  return (
    <div className='widgetSm' >
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList"> 
            <li className='widgetSmListItem' >
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Ravindra Rayal</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
                </button>
            </li>
            <li className='widgetSmListItem' >
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Samay Raina</span>
                    <span className="widgetSmUserTitle">Comedian</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
                </button>
            </li>
            <li className='widgetSmListItem' >
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Bhuvan Bam</span>
                    <span className="widgetSmUserTitle">Actor</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
                </button>
            </li>
            <li className='widgetSmListItem' >
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Mark Rober</span>
                    <span className="widgetSmUserTitle">Youtuber</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
                </button>
            </li>
            <li className='widgetSmListItem' >
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Prashant Dhawan</span>
                    <span className="widgetSmUserTitle">Geopolitics Analyst</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
                </button>
            </li>

        </ul>
    </div>
  )
}

export default WidgetSm