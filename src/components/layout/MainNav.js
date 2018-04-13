import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LocalNavLink = styled(NavLink)`
  color: black;
  font-weight: 300;
`;
class MainNav extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
    };
  }
  render() {
    return (
      <Menu fluid size="massive">
        <Container>
          <Menu.Item header>
            <LocalNavLink exact to="/" activeStyle={{ fontWeight: 900 }}>
              React Movie DB
            </LocalNavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/movies" activeStyle={{ fontWeight: 900 }}>
              Peliculas
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/series" activeStyle={{ fontWeight: 900 }}>
              Series
            </NavLink>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default MainNav;
