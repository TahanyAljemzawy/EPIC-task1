import React from 'react'
import './drinkItem.css'

const Item = props=> {
//            <img src={} alt='Burger' />

    return (
        <div className='drink__item'>
            <div className='item__disc__container'>
            <h1 className='item__name'>{props.name}</h1>           
                {/* to convert the price to decimal number with 2  */}
                <h1 className='item__price'>JOD {parseFloat(props.price).toFixed( 2 )}</h1>
            </div> 
            <img src={props.img} alt='drinks'/> 
                 
        </div>
    )
}



export default Item

