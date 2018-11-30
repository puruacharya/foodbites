import React, { Component } from 'react';
import DeliveryboyListItem from './DeliveryboyListItem';

class DeliveryboyList extends Component {
  render() {
    const {dboy,onDboyOpen, deleteDboy} = this.props;      
    return (
      <div>
        
        {dboy && dboy.map((dboy) => (
          <DeliveryboyListItem dboy={dboy}key={dboy.id} onDboyOpen={onDboyOpen}
          deleteDboy={deleteDboy}/>
        ))}


      </div>
    );
  }
}

export default DeliveryboyList;