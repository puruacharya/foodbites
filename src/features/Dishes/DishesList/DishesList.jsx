import React, { Component } from 'react';
import DishesListItem from './DishesListItem';
const dishes= [
    {
      id: '1',
      title: 'Paav Bhaaji',
      cost: '250',
      type: 'Indian',
      description:'paaaaaav bhaaaaaaji',
      
      
      nooflikes:'3',
      photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      
    }
    ,
    {
      id: '2',
      title: 'Noodles',
      cost: '200',
      type: 'Chineese',
      description:'Noodles',
      
      
      nooflikes:'4',
        photoURL: 'https://randomuser.me/api/portraits/men/21.jpg',
      
   }
  ]
class DishesList extends Component {
  render() {
    return (
      <div>
        <h1>Dishes List</h1>
        {dishes.map((dishes)=> {
            <DishesListItem key ={dishes.id} dishes={dishes} />
        })}
        
      </div>
    )
  }
}
export default DishesList;