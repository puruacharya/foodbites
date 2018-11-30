import React, { Component } from 'react';
import PeopleListItem from './PeopleListItem';

class PeopleList extends Component {
  render() {
    const {people,onPeopleOpen, deletePeople} = this.props;      
    return (
      <div>
        
        {people &&  Object.values(people).map((people,index) => (
          <PeopleListItem people={people}key={index} onDboyOpen={onPeopleOpen}
          deletePeople={deletePeople}/>
        ))}


      </div>
    );
  }
}

export default PeopleList;