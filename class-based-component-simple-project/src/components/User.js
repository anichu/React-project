import React, { Component } from 'react';
import styled from 'styled-components';

export class User extends Component {
  render() {
    const user = this.props.user;
    return (
      <StyledUser>
        <h4>{user.name}</h4>
      </StyledUser>
    );
  }
}

const StyledUser = styled.div`
  padding: 0.2rem 0rem 1rem;
`;

export default User;
