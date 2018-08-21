import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../home'
import About from '../about'

const AppWrapper = styled.div`
  height: 100%;
`

const Header = styled.header`
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .link {
    padding: 10px;
    text-decoration: none;
    color: #333;
  }

  .link:hover {
    color: black;
  }
`

const Main = styled.main`
  height: calc(100% - 65px);
`

const App = () => (
  <AppWrapper>
    <Header>
      <Link to="/" className="link">Home</Link>
      <Link to="/about-us" className="link">About</Link>
    </Header>

    <Main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </Main>
  </AppWrapper>
)

export default App
