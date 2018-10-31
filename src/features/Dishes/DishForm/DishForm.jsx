import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const emptyForm = {
  id: '1',
  title: '',

  category: '',
  description: '',
  city: '',
  venue: "",
  hostedBy: '',
  hostPhotoURL: '',
}

class DishForm extends Component {
  state = {
    dishes: emptyForm
  };
  componentDidMount() {
    if (this.props.selectedDish !== null) {
      this.setState({
        dishes: this.props.selectedDish
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedDish !== this.props.selectedDish) {
      this.setState({
        dishes: nextProps.selectedDish || emptyForm
      })
    }
  }
  onFormSubmit = (dsh) => {
    dsh.preventDefault();
    if (this.state.dishes.id) {
      this.props.updateDish(this.state.dishes);

    } else {
      this.props.createDish(this.state.dishes);
    }
  }
  onInputChange = (dsh) => {
    const newDish = this.props.dishes;
    newDish[dsh.target.name] = dsh.target.value;
    this.setState({
      dishes: newDish
    })
  }
  render() {
    const { handleCancel } = this.props;
    const { dishes } = this.props;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Title</label>
            <input name="title" onChange={this.onInputChange} value={dishes.title} placeholder="Title" />
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <input name="category" onChange={this.onInputChange} value={dishes.category} placeholder="Description" />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input name="description" onChange={this.onInputChange} value={dishes.description} />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name="city" placeholder="City" onChange={this.onInputChange} value={dishes.city} />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name="venue" placeholder="Venue" onChange={this.onInputChange} value={dishes.venue} />
          </Form.Field>
          <Form.Field>
            <label>HostedBy</label>
            <input name="hostedBy" placeholder="Enter the Hosted By" onChange={this.onInputChange} value={dishes.hostedBy} />
          </Form.Field>
          <Button positive type="submit" >
            Submit
                </Button>
          <Button onClick={handleCancel} type="button" >Cancel</Button>
        </Form>
      </Segment>

    );
  }
}

export default DishForm;