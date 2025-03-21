import { useEffect, useState } from "react";
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import newRequest from "../../utils/newRequest";

const FeaturedInfo = () => {

    const [income, setIncome] = useState(0);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await newRequest.get("/orders/income");

                const {income} = res.data;
                setIncome(income[1].total);
                setPercent((income[1].total*100)/income[0].total - 100);
            } catch (err) {
                console.log(err);
            }
        };
        getIncome();
    }, []);

  return (
    <div className="featured"> 
        <div className='featuredItem' >
            <span className='featuredTitle'>Revenue</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>₹ {income}</span>
                <span className='featuredMoneyRate'>{Math.round(percent)}%

                {
                    percent > 0 ? <ArrowUpward  className="featuredIcon positive"/> : <ArrowDownward  className="featuredIcon negative"/>
                }
                     </span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem' >
            <span className='featuredTitle'>Sales</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>₹ 4,345</span>
                <span className='featuredMoneyRate'>-1.4 
                <ArrowDownward  className="featuredIcon negative"/>  
                     </span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem' >
            <span className='featuredTitle'>Cost</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>₹ 2,115</span>
                <span className='featuredMoneyRate'>+2.4 
                <ArrowUpward  className="featuredIcon positive"/>  
                     </span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>

    </div>
  )
}

export default FeaturedInfo