import React, { Component } from 'react';
import {Menu, Container } from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>

                    <img src="logo.png" alt="logo"/>
                </Menu.Item>
            </Container>

        </Menu>
    )
  }
}
export default NavBar;