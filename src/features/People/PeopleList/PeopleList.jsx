import React, { Component } from 'react';
import  PeopleListItem  from '../PeopleList/PeopleListItem';

class PeopleList extends Component {
  render() {
    const {peoples,onPeopleOpen, deletePeople} = this.props;      
    return (
      <div>
        
        {peoples && peoples.map((peoples) => (
          <PeopleListItem peoples={peoples}key={peoples.id} onPeopleOpen={onPeopleOpen}
          deletePeople={deletePeople}/>
        ))}


      </div>
    );
  }
}

export default PeopleList;