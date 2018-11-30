import React, { Component } from 'react';
import  ManagerListItem  from '../ManagerList/ManagerListItem';

class ManagerList extends Component {
  render() {
    const {manager,onManagerOpen, deleteManager} = this.props;      
    return (
      <div>
        
        {manager && manager.map((manager) => (
          <ManagerListItem manager={manager}key={manager.id} onManagerOpen={onManagerOpen}
          deleteManager={deleteManager}/>
        ))}


      </div>
    );
  }
}

export default ManagerList;