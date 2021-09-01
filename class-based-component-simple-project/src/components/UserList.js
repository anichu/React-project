import React, { Component } from 'react';
import styled from 'styled-components';
import User from './User';

export class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showUsers: true,
    };
  }

  showHandler() {
    this.setState({ showUsers: !this.state.showUsers });
  }

  render() {
    // console.log(this.props.users);

    return (
      <StyledUserList>
        <button onClick={this.showHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && (
          <div className='user-box'>
            {this.props.users.map((user) => (
              <User user={user} key={user.id} />
            ))}
          </div>
        )}
      </StyledUserList>
    );
  }
}

const StyledUserList = styled.div`
  width: 40rem;
  min-height: 12rem;
  margin: 1rem auto;
  background-color: white;
  border-radius: 1rem;
  position: relative;

  button {
    position: absolute;
    font-size: 1.4rem;
    cursor: pointer;
    padding: 0.5em 1em;
    left: 50%;
    top: 1rem;
    transform: translateX(-50%);
    color: white;
    background-color: hsl(344, 79%, 40%);
    border: 1px solid hsl(344, 79%, 25%);
    outline: none;
    border-radius: 1rem;
  }
  button:hover,
  button:focus {
    background-color: hsl(344, 79%, 30%);
    box-shadow: 0 0 5px 0 hsl(344, 79%, 25%);
  }

  .user-box {
    padding-top: 5rem;
    text-align: center;
  }
`;

export default UserList;
