import React, { Component } from 'react';
import DishesListItem from '../DishesList/DishesListItem';

class DishesList extends Component {
  render() {
    const {dishes} = this.props;      
    return (
      <div>
        
        { dishes.map((dishes) => (
          <DishesListItem dishes={dishes}/>
        ))}


      </div>
    );
  }
}

export default DishesList;