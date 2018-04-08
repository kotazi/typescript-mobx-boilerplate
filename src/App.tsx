import { inject, observer } from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';

import { ProfileTable } from './components/ProfileTable';
import { ProfileStore } from './store/Profile';
const logo = require('./logo.svg');

type Props = {
  profileStore?: ProfileStore;
};

@inject('profileStore')
@observer
class App extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.initialize();
  }

  initialize() {
    const store = this.props.profileStore as ProfileStore;
    store.fetchOwnProfile();
  }

  render() {
    const store = this.props.profileStore as ProfileStore;
    const p = store.profile ? store.profile.user : undefined;
    const profileTableProps = p
      ? {
          name: p.displayName,
          age: p.age,
          height: p.height,
          weight: p.weight
        }
      : undefined;

    return (
      <AppWrapper className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {profileTableProps ? <ProfileTable {...profileTableProps} /> : null}

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
