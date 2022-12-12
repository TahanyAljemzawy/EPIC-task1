import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import './menuList.css';

import { fetchBurgerMenu }  from '../../store/Actions/index';
import Menu from './Menu/Menu';

const MainMenu = props => {

        const dispatch  = useDispatch()
        const fetchMenu = () => dispatch(fetchBurgerMenu())

        const { offers, chicken, beef, drinks } = useSelector(( state ) => ({
          offers: state.mainList.offersMenu,
          chicken: state.mainList.chekensBurgerMenu,
          beef: state.mainList.beefBurgerMenu,
          drinks:  state.mainList.drinksMenu,
        }))

        useEffect(() => {
          fetchMenu()
      }, [])   
    
     
    return (
        <div className='mainmenu' >
            <h1 className= 'mainmenu__title'> Burger Makers Menu</h1>
            <Menu menuTitle='Offers' menu={offers}/>  
            <Menu menuTitle='Beef Burger Sandwiches' menu={beef}/>
            <Menu menuTitle='Chiken Burger Sandwiches' menu={chicken}/>
            <Menu menuTitle='Drinks' menu={drinks}/>      
        </div>
        )
    
}
/*
const mapStateToProps    = state    => { return { menu : state.menuList }}

const mapDispatchToProps = dispatch => { return { fetchMenu : dispatch(fetchBurgerMenu())}}  
export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);

  **/  


export default MainMenu;
