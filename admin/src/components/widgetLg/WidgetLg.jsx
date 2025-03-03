import "./widgetLg.css"

const WidgetLg = () => {

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

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
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
              alt='' className='widgetLgImg' />
              <span className='widgetLgName'>Bhuvan</span>
            </td>
            <td className='widgetLgDate'>2 Jun 2021</td>
            <td className='widgetLgAmount'>₹ 1220.00</td>
            <td className='widgetLgStatus'>
              <Button type='Approved' />
            </td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
              alt='' className='widgetLgImg' />
              <span className='widgetLgName'>Prashant</span>
            </td>
            <td className='widgetLgDate'>20 Jan 2021</td>
            <td className='widgetLgAmount'>₹ 1540.00</td>
            <td className='widgetLgStatus'>
              <Button type="Declined" />
            </td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
              alt='' className='widgetLgImg' />
              <span className='widgetLgName'>Striver</span>
            </td>
            <td className='widgetLgDate'>26 Aug 2021</td>
            <td className='widgetLgAmount'>₹ 1022.00</td>
            <td className='widgetLgStatus'>
              <Button type="Pending" />
            </td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
              alt='' className='widgetLgImg' />
              <span className='widgetLgName'>Shradha</span>
            </td>
            <td className='widgetLgDate'>2 Jun 2021</td>
            <td className='widgetLgAmount'>₹ 1320.00</td>
            <td className='widgetLgStatus'>
              <Button type='Approved' />
            </td>
          </tr>
      </table>
    </div>
  )
}

export default WidgetLg