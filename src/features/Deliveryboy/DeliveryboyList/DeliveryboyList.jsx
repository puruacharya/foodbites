import React, { Component } from 'react';
//import PeopleListItem from './PeopleListItem';
import DeliveryboyListItem from './DeliveryboyListItem';

class DeliveryboyList extends Component {
  render() {
    const {dboys,onDeliveryboyOpen, deleteDeliveryboy} = this.props;      
    return (
      <div>
        
        {dboys && dboys.map((dboys) => (
          <DeliveryboyListItem dboys={dboys}key={dboys.id} onDeliveryboyOpen={onDeliveryboyOpen}
          deleteDeliveryboy={deleteDeliveryboy}/>
        ))}


      </div>
    );
  }
}

export default DeliveryboyList;