import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { withRouter, NavLink, Link } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import { connect } from 'react-redux';
import { openModal } from '../../modals/modalActions';
import { logout } from '../../auth/authActions';


const actions = {
  openModal,
  logout
}
const mapState = (state) => ({
  auth : state.auth
})
class NavBar extends Component {
  
  handleSignIn = () => {
    this.props.openModal('LoginModal')
    

  }
  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }
  handleSignOut = () => {
    this.props.logout();
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    const authenticated = auth.authenticated;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to='/' header>
            <img src="assets/logo.png" alt="logo" />
            Foodbites
                      </Menu.Item>
          <Menu.Item name="Dishes" as={NavLink} to='/dishdashboard' />

          <Menu.Item as={NavLink} to='/testpage' name="TestPage" />
          <Menu.Item as={NavLink} to='/chefdashboard' name="Chef" />
          <Menu.Item as={NavLink} to='/people' name="User List" />
          <Menu.Item as={NavLink} to='/dboydashboard' name="Delivery Boy List" />
          <Menu.Item>

            {authenticated &&
              <Button floated="right" positive inverted content="View My Cart/Wishlist" />}
          </Menu.Item>
          {authenticated ? <SignedInMenu currentUser = {auth.currentUser} signOut={this.handleSignOut} /> : <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />}

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
export default withRouter(connect(mapState, actions)(NavBar));