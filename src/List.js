import React from 'react';
import ListItem from './ListItem';

const List = ({menuData})=>{
    console.log(menuData);
    return (
      <div>
        {
          menuData.map( item => <ListItem item={item} key={item.id} />)
        }
      </div>
    )
  }

export default List;  
  