import * as React from 'react';
import styled from 'styled-components';
const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <AppWrapper className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  text-align: center;

  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
  }

  .App-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  .App-title {
    font-size: 1.5em;
  }

  .App-intro {
    font-size: large;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export default App;
