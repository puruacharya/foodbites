import React, { Component } from 'react';
import { Menu, Container, Button, Dropdown } from 'semantic-ui-react';
import { withRouter, NavLink, Link } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import { connect } from 'react-redux';
import { openModal } from '../../modals/modalActions';
//import { logout } from '../../auth/authActions';
import { withFirebase } from 'react-redux-firebase';


const actions = {
  openModal,
  
}
const mapState = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})
class NavBar extends Component {
  
  handleSignIn = () => {
    this.props.openModal('LoginModal')
    

  }
  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }
  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push('/');
  }
  render() {
    const { auth, profile } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to='/' header>
            <img src="assets/logo.png" alt="logo" />
            Foodbites
                      </Menu.Item>
          <Menu.Item as={NavLink} to='/dishdashboard' name="Dishes" />

          <Menu.Item as={NavLink} to='/testpage' name="TestPage" />
          <Menu.Item as={NavLink} to='/chefdashboard' name="Chef" />
          <Menu.Item as={NavLink} to='/peopledashboard' name="User List" />
          <Menu.Item as={NavLink} to='/dboydashboard' name="Delivery Boy List" />
          <Menu.Item as={NavLink} to='/waiterdashboard' name="Waiter List" />
          <Menu.Item>

           
          </Menu.Item>
          {authenticated ? <SignedInMenu profile = {profile} signOut={this.handleSignOut} /> : <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />}

          {authenticated &&
          <Menu.Item>
            <Button
              as={Link}
              to="/createdish"
              floated="right"
              positive
              inverted
              content="Create Dish"
            />
          </Menu.Item>}
        </Container>
      </Menu>



    );
  }
}
export default withRouter(withFirebase(connect(mapState, actions)(NavBar)));