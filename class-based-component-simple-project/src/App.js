import React, { Component, createContext } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import UserList from './components/UserList';
import { data } from './data/data';

const dataUser = data();
export const FinalContext = createContext({ users: [] });
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchValue: '',
    };
  }

  searchHandler(e) {
    console.log(e.target.value);
    this.setState({ searchValue: e.target.value });
  }

  componentDidMount() {
    console.log('dataUser');
    this.setState({ users: dataUser });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      // this.context.users = finalValue;
      // console.log('context', this.context.users);
      this.setState({
        users: dataUser.filter((user) =>
          user.name.includes(this.state.searchValue)
        ),
      });
    }
  }
  render() {
    return (
      <>
        <GlobalStyle />

        <StyledApp>
          <h1>Class Base Project</h1>
          <hr />
          <StyledSearch>
            <input type='search' onChange={this.searchHandler.bind(this)} />
          </StyledSearch>
          <UserList users={this.state.users} />
        </StyledApp>
      </>
    );
  }
}

const StyledApp = styled.div`
  h1 {
    text-align: center;
    color: white;
    text-shadow: 1px 0px 1px #ceb0c2;
    padding-top: 0.5rem;
  }
  hr {
    color: white;
    margin-top: 0.5rem;
  }

  width: 100%;
  margin: auto;
  background-color: #3f3f3f;
  height: 100vh;
`;

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

export default App;
