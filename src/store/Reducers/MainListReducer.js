import * as actionTypes from '../Types/actionType'

const inetaialState = {
    drinksMenu:[],
    beefBurgerMenu:[],
    chekensBurgerMenu : [],
    offersMenu : []   
}
const reducer = ( state = inetaialState, action ) => {

    switch (action.type) {
        case actionTypes.FETCH_BURGER_MENU:
           
            return {
                ...state,
                drinksMenu: action.drinksMenu,
                beefBurgerMenu: action.meetBurgerMenu,
                chekensBurgerMenu: action.chekensBurgerMenu,
                offersMenu: action.offersMenu
            } 
    
        default:
            return state
    }
}

export default reducer;