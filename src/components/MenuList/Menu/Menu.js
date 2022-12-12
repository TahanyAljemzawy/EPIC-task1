import React from 'react';

import MenuItem from '../MenuItem/menuItem';
import '../menuList.css';

const Menu= ( props ) => {

    return (
        <div className='menu' >
                <h1 className='menuTitle'>{props.menuTitle}</h1>
                { props.menu.map(menuItem => <MenuItem key={menuItem.id} price={menuItem.price} name={menuItem.name} img={menuItem.img} description={menuItem.description} />)
}

            </div>
    )
}

export default Menu;