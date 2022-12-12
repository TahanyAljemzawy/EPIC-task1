import React from 'react'

import './item.css'

const MenuItem = (props) => {
    return (
        <div className='item'>
            <div className='item__describtion'>
                <div className='item__desc__container'>
                    <h1 className='item__name'>{props.name}</h1>
                    <p className='item__desc '>{props.description}</p>
                </div>
                {/* to convert the price to decimal number with 2  */}
                <h1 className='item__price'>JOD {parseFloat(props.price).toFixed( 2 )}</h1>               
            </div>
            <img src={props.img} alt='Burger' />

            
        </div>
    )
}

export default MenuItem;
