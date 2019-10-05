import React from 'react';
import './App.css';
import store from './store'
import{ Provider }from "react-redux"
import AlbumsListContainer from './components/AlbumsListContainer'

class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <AlbumsListContainer />
        </Provider>
      );
    }
}

export default App;
