import React, { Component } from 'react';
import WaiterListItem from './WaiterListItem';

class WaiterList extends Component {
  render() {
    const {waiter,onWaiterOpen, deleteWaiter} = this.props;      
    return (
      <div>
        
        {waiter && waiter.map((waiter) => (
          <WaiterListItem waiter={waiter}key={waiter.id} onWaiterOpen={onWaiterOpen}
          deleteWaiter ={deleteWaiter}/>
        ))}


      </div>
    );
  }
}

export default WaiterList;