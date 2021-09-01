import React, { Component } from 'react';
import styled from 'styled-components';
// import { FinalContext } from '../App';

export class SearchBar extends Component {
  // static contextType = FinalContext;
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  searchHandler(e) {
    console.log(e.target.value);
    this.setState({ searchValue: e.target.value });
  }

  // componentDidMount() {
  //   const searchUser = this.props.users.filter(
  //     (user) => user.name === this.state.searchValue
  //   );
  //   this.setState({ users: searchUser });
  // }

  componentDidUpdate(prevProps, prevState) {
    let finalValue;
    if (prevState.searchValue !== this.state.searchValue) {
      finalValue = this.props.users.filter(
        (user) => user.name === this.state.searchValue
      );
      // this.context.users = finalValue;
      // console.log('context', this.context.users);
      console.log(finalValue);
    }
  }

  render() {
    return (
      <StyledSearch>
        <input type='search' onChange={this.searchHandler.bind(this)} />
      </StyledSearch>
    );
  }
}

const StyledSearch = styled.div`
  width: 40rem;
  min-height: 10vh;
  background: white;
  margin: 1rem auto;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  input {
    display: block;
    width: 20rem;
    font-size: 1.3rem;
    margin: auto;
    padding: 0.2rem 0rem;
    outline: none;
    text-indent: 0.3rem;
  }
`;

export default SearchBar;
