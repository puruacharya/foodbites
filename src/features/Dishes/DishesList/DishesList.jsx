import React, { Component } from 'react';
import DishesListItem from '../DishesList/DishesListItem';
const {dishes} = this.props;
class DishesList extends Component {
  render() {
    
    return (
      <div>
        
        {dishes.map((dishes) => (
          <DishesListItem key={dishes.id} dishes={dishes}/>
        ))}


      </div>
    );
  }
}

export default DishesList;