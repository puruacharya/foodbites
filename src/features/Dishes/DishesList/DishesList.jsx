import React, { Component } from 'react';
import DishesListItem from '../DishesList/DishesListItem';

class DishesList extends Component {
  render() {
    const {dishes,onDishOpen, deleteDish} = this.props;      
    return (
      <div>
        
        {dishes && dishes.map((dishes) => (
          <DishesListItem dishes={dishes}key={dishes.id} onDishOpen={onDishOpen}
          deleteDish={deleteDish}/>
        ))}


      </div>
    );
  }
}

export default DishesList;