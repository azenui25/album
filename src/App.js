import React from 'react';
import './App.css';
import store from './store'
import{ Provider }from "react-redux"

class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </Provider>
      );
    }
}

export default App;
