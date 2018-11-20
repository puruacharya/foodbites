import React, { Component } from 'react';
import  ChefListItem  from '../ChefList/ChefListItem';

class ChefList extends Component {
  render() {
    const {chefs,onChefOpen, deleteChef} = this.props;      
    return (
      <div>
        
        {chefs && chefs.map((chefs) => (
          <ChefListItem chefs={chefs}key={chefs.id} onChefOpen={onChefOpen}
          deleteChef={deleteChef}/>
        ))}


      </div>
    );
  }
}

export default ChefList;