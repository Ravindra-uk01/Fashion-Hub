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

                console.log('res is ', res);
                setIncome(res.data.totalIncome);
            } catch (err) {
                console.log(err);
            }
        };
        getIncome();
    }, []);

    console.log('income is ', income);
    console.log('percent is ', percent);

  return (
    <div className="featured"> 
        <div className='featuredItem' >
            <span className='featuredTitle'>Revenue</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>₹ 2,415,000</span>
                <span className='featuredMoneyRate'>-11.4 
                <ArrowDownward  className="featuredIcon negative"/>  
                     </span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem' >
            <span className='featuredTitle'>Sales</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>₹ 4,345,000</span>
                <span className='featuredMoneyRate'>-1.4 
                <ArrowDownward  className="featuredIcon negative"/>  
                     </span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem' >
            <span className='featuredTitle'>Cost</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>₹ 2,115,000</span>
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