import React, { Component } from 'react';
import ChefListItem from '../ChefList/ChefListItem';

class ChefList extends Component {
  render() {
    const {chef,onChefOpen, deleteChef} = this.props;      
    return (
      <div>
        
        {chef && chef.map((chef) => (
          <ChefListItem chef={chef} key={chef.id} onChefOpen={onChefOpen}
          deleteChef={deleteChef}/>
        ))}


      </div>
    );
  }
}

export default ChefList;
