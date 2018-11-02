import React, { Component } from 'react';
import PeopleListItem from './PeopleListItem';

class PeopleList extends Component {
  render() {
    const {people, onPeopleOpen, deletePeople} = this.props;      
    return (
      <div>
        <h1>People List</h1>
        { people.map((people) => (
          <PeopleListItem
            key={people.id}
            people={people}
            onPeopleOpen={onPeopleOpen}
            deletePeople={deletePeople}
          />
        ))}
      </div>
    );
  }
}

export default PeopleList;