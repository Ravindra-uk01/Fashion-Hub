import React from 'react'
import '../styles/categoryItem.css';

const CategoryItem = ({item}) => {
  return (
    <div className='category_item'>
        <img src={item.img} alt={item.name} />
        <div className="item_info">
            <h1>{item.title}</h1>
            <button> SHOP NOW</button>
        </div>

    </div>
  )
}

export default CategoryItem