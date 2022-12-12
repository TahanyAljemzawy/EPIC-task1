import * as actionTypes from '../Types/actionType';
import { getMenuListData } from '../Services/Services'


//action creatore to fetch use the thunk middleware to be abble to make async actions  
export const fetchBurgerMenu = () => dispatch => {
    console.log('fetchBurgerMenu');
        getMenuListData()
            .then(data => {
                //store the value of each item in tempArr an to make use of the id provided from the firebase
               const tempArr = []
                for (let key =0; key <data.length; key++) {
                    tempArr.push({
                        ...data[key],
                        id: key
                    })
                } 
       
                dispatch({
                    type:actionTypes.FETCH_BURGER_MENU,
                   
                    drinksMenu:tempArr.filter(item => item.type === 'drinks'),
                    meetBurgerMenu:tempArr.filter(item => item.type === 'beefBurger'),
                    chekensBurgerMenu : tempArr.filter(item => item.type === "checkenBurger"),
                    offersMenu : tempArr.filter(item => item.offer === true)
                })})
            .catch(err => console.log(err))
    }

/*
 for (let key =0; key <data.length; key++) {
                    
                    if ( data.type === 'beefBurger' )
                    meetBurgerFilter.push({
                        ...data[key],
                        id: key
                    })
                    else if ( data.type === 'checkenBurger' ) 
                    checkenBurgerFilter.push({
                        ...data[key],
                        id: key
                    })
                    else if ( data.offer === true) 
                    OffersFilter.push({
                        ...data[key],
                        id: key
                    })
                    else if ( data.type === 'drinks' ) 
                    drinksFilter.push({
                        ...data[key],
                        id: key
                    })
                }
*/
