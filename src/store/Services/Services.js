import papsi from '../../assests/papsi.png'
import miranda from '../../assests/miranda.png'
import sevenup from '../../assests/sevenUp.png'
import water from '../../assests/water.png'
import item from '../../assests/item.png'

const test = {
    offers: [
      {
        description: "Fresh Beef Patty (180 gram), Cheddar Cheese, Tomato, Lettuce, Pickles, Onion & Makers Sauce.",
        name: "Makers Beef Burger", offer: true, price: 3.58, img: item
      },
    ],
    beefBurger: [
      { description: "BBQ sauce, Mozzarella Cheese, Lettuce, Tomato & Makers Sauce.", name: "Turkish Beef Burger", offer: false, price: 3.5, img: item },
      { description: "Chili Sauce, Cheddar Cheese, Onion, Tomato, Lettuce & Makers Sauce.", name: "American Beef Burger", offer: false, price: 3.5, img: item },
      { description: "A Slice Of Beef Bacon, Smoked Cheese, Tomato, Lettuce & Makers Sauce.", name: "Italian Beef Burger", offer: false, price: 4.5, img: item },
      { description: "A Slice Of Beef Bacon, Smoked Cheese, Tomato, Lettuce & Makers Sauce.", name: "Mexican Beef Burger", offer: false, price: 7.5, img: item },
    ],
    chickenBurger: [
      { description: "Chicken Patty (180 gram), Cheddar Cheese, Lettuce, Pickles & Chicken Makers Sauce.", name: "Makers Chicken Burger", offer: false, price: 3.5, img: item },
      { description: "BBQ Sauce, Mozzarella Cheese, Lettuce, Tomato & Chicken Makers Sauce.", name: "Swedish Chicken Burger", offer: false, price: 3.5, img: item },
      { description: "Jalapeno, Chips, Hot Sauce, Cheddar Cheese, Lettuce, Corn & Chicken Makers Sauce.", name: "Indian Chicken Burger", offer: false, price: 7.5, img: item },
      { description: "A Slice Of Beef Bacon, Smoked Cheese, Tomato, Lettuce & Chicken Makers Sauce.", name: "British Chicken Burger", offer: true, price: 7.5,  img: item },
      { description: "A Grilled Chicken Patty, Light Mayo, Light Cheese, Tomato, and Lettuce in a Brown Bread Bun.", name: "Irish Chicken Burger", offer: false, price: 4.5,  img: item },
    ],
    drinks: [
      { name: "Pepsi", offer: false, price: 0.4, img: papsi },
      { name: "Mirinda", offer: false, price: 0.4, img: miranda },
      { name: "7Up", offer: false, price: 0.4, img: sevenup },
      { name: "Water", offer: false, price: 0.4, img: water },
    ]
  }
  const formatResponse = (newResponse) => {
    return Object.keys(newResponse).reduce((acc, item) => {
      return [
        ...acc,
        ...newResponse[item].map(subItem => ({ ...subItem, type: item }))
      ]
    }, [])
  }

//dummy data
const menu = [
    {description: "Fresh Beef Patty (180 gram), Cheddar Cheese, Tomato, Lettuce, Pickles, Onion & Makers Sauce.", name: "Makers Beef Burger", offer: true, price: 3.58, type: "beefBurger", img:item},
    {description: "BBQ sauce, Mozzarella Cheese, Lettuce, Tomato & Makers Sauce.", name: "Turkish Beef Burger", offer: false, price: 3.5, type: "beefBurger", img:item},
    {description: "Chili Sauce, Cheddar Cheese, Onion, Tomato, Lettuce & Makers Sauce.", name: "American Beef Burger", offer: false, price: 3.5, type: "beefBurger", img:item},
    {description: "A Slice Of Beef Bacon, Smoked Cheese, Tomato, Lettuce & Makers Sauce.", name: "Italian Beef Burger", offer: false, price: 4.5, type: "beefBurger", img:item},
    {description: "A Slice Of Beef Bacon, Smoked Cheese, Tomato, Lettuce & Makers Sauce.", name: "Mexican Beef Burger", offer: false, price: 7.5, type: "beefBurger", img:item},
    {description: "Chicken Patty (180 gram), Cheddar Cheese, Lettuce, Pickles & Chicken Makers Sauce.", name: "Makers Chicken Burger", offer: false, price: 3.5, type: "checkenBurger", img:item},
    {description: "BBQ Sauce, Mozzarella Cheese, Lettuce, Tomato & Chicken Makers Sauce.", name: "Swedish Chicken Burger", offer: false, price: 3.5, type: "checkenBurger", img:item},
    {description: "Jalapeno, Chips, Hot Sauce, Cheddar Cheese, Lettuce, Corn & Chicken Makers Sauce.", name: "Indian Chicken Burger", offer: false, price: 7.5, type: "checkenBurger", img:item},
    {description: "A Slice Of Beef Bacon, Smoked Cheese, Tomato, Lettuce & Chicken Makers Sauce.", name: "British Chicken Burger", offer: true, price: 7.5, type: "checkenBurger", img:item},
    {description: "A Grilled Chicken Patty, Light Mayo, Light Cheese, Tomato, and Lettuce in a Brown Bread Bun.", name: "Irish Chicken Burger", offer: false, price: 4.5, type: "checkenBurger", img:item},
    {name: "Pepsi", offer: false, price: 0.4, type: "drinks", img:papsi},
    {name: "Mirinda", offer: false, price: 0.4, type: "drinks", img:miranda},
    {name: "7Up", offer: false, price: 0.4, type: "drinks", img:sevenup},
    {name: "Water", offer: false, price: 0.4, type: "drinks", img:water},
] 
export const getMenuListData = () => new Promise(( resolve, reject )=>{
    resolve(formatResponse(test));
    reject(Error);
})   



