import React, { Component } from 'react';
import DishesListItem from './DishesListItem';

class DishesList extends Component {
  render() {
    const {dishes} = this.props;
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