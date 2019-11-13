import React from 'react';
import './App.css';
import AppHeader from './AppHeader';
import AppLogo from './AppLogo';
import AppFollowers from './AppFollowers';
import AppFollowing from './AppFollowing';
import AppLink from './AppLink';
import AppFooter from './AppFooter';

function App() {
  const textName = "Koloda Darina";

  return (
    <div className="App">

      <header className="App-header">
        <AppHeader text={textName} />
      </header>

      <main className="App-main">
        <div className="App-card">
          <AppHeader text={textName + " Profile"} />
          <hr />
          <AppLogo /> 
        </div>

        <div className="card-footer">
          <div className="follow">
            <AppFollowers />
          </div>
          <div className="line"></div>
          <div className="follow">
            <AppFollowing />
          </div>
        </div>
        <div className="link">
          <AppLink />
        </div>
      </main>

      <footer className="App-footer">
        <AppFooter />
      </footer>

    </div>
  );
}

export default App;
