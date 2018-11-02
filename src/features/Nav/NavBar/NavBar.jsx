import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { withRouter, NavLink } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavBar extends Component {
  state = {
    authenticated: false
  };
  handleSignIn = () => {
    this.setState({
      authenticated: true
    })

  }
  handleSignOut = () => {
    this.setState({
      authenticated: false
    });
    this.props.history.push('/');
  }
  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to='/' header>
            <img src="assets/logo.png" alt="logo" />
            Foodbites
                      </Menu.Item>
          <Menu.Item name="Dishes" as={NavLink} to='/dishdashboard' />

          <Menu.Item as={NavLink} to='/testpage' name="TestPage" />
          <Menu.Item as={NavLink} to='/people' name="User List" />
          <Menu.Item>

            {authenticated &&
              <Button floated="right" positive inverted content="View My Cart/Wishlist" />}
          </Menu.Item>
          {authenticated ? <SignedInMenu signOut={this.handleSignOut} /> : <SignedOutMenu signIn={this.handleSignIn} />}
        </Container>
      </Menu>



    );
  }
}
export default withRouter(NavBar);