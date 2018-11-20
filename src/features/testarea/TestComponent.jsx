import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { incrementAsync, decrementAsync } from './testAction';
import Script from 'react-load-script';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { openModal } from '../modals/modalActions';

const mapState = (state) => ({
  data: state.test.data,
  loading : state.test.loading
});

const actions = {
  incrementAsync,
  decrementAsync,
  openModal,
};

class TestComponent extends Component {
  state  = {
    address : '',
    scriptLoaded : false
  }
  handleScriptLoad = () => {
    this.setState ({
      scriptLoaded : true
    })
  }
  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }
  onChange= (address) => this.setState({address})

  

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,

    }
    const {incrementAsync, decrementAsync, data, openModal, loading} = this.props;
    return (
      <div>
        <Script 
        url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAe7phYH4ilQgj1a2trtIs2_Np9f6gwtz0&libraries=places' 
        onLoad = {this.handleScriptLoad}
        />
        <h1>Test Area</h1>
        <h3>The answer is: {data}</h3>
        <Button loading ={loading}onClick={incrementAsync} color='green' content='Increment' />
        <Button loading={loading} onClick={decrementAsync} color='red' content='Decrement' />
        <Button onClick={() => openModal('TestModal',{data: 43})} color='red' content='Modal Open' />
        <br />
        <br />
        <form onSubmit={this.handleFormSubmit}>
        {this.state.scriptLoaded &&
        <PlacesAutocomplete inputProps={inputProps} /> }
        <button type="submit">Submit</button> 
      </form>
      
      </div>


    );
  }
}

export default connect(mapState, actions)(TestComponent);