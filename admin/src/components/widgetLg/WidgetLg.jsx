import { useEffect, useState } from "react";
import "./widgetLg.css"
import newRequest from "../../utils/newRequest";
import {format} from 'timeago.js';

const WidgetLg = () => {

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

   const [orders, setOrders] = useState([]);
  
    useEffect(() => {
      const getOrders = async () => {
        try {
          const res = await newRequest.get("/orders?new=true");
          const { allOrders } = res.data;
          setOrders(allOrders);
        } catch (err) {
          console.log(err);
        }
      };
      getOrders();
    }, []);
  
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transactions</h3>
      <table className='widgetLgTable '>
          <tr className='widgetLgTr'>
            <th className='widgetLgTh'>Customer</th>
            <th className='widgetLgTh'>Date</th>
            <th className='widgetLgTh'>Amount</th>
            <th className='widgetLgTh'>Status</th>
          </tr>

          {
            orders && orders.length > 0 && orders.map((order) => (
              <tr className='widgetLgTr' key={order._id}>
                <td className='widgetLgUser'>
                  {/* <img src={order.photo || 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
                  alt='' className='widgetLgImg' /> */}
                  <span className='widgetLgName'>{order.userId}</span>
                </td>
                <td className='widgetLgDate'>{format(order.createdAt)}</td>
                <td className='widgetLgAmount'>₹ {order.totalAmount}</td>
                <td className='widgetLgStatus'>
                  <Button type={order.orderStatus} />
                </td>
              </tr>
            ))
          }
         
      </table>
    </div>
  )
}

export default WidgetLg