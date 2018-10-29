import React, { Component } from 'react';
import './App.css';

// Redux 
import { Provider } from 'react-redux';
import store from './store';

import Posts from './components/Posts';
import PostForm from './components/Postform';

class App extends Component {
  render() {
    return (
      <Provider store={store} > 
          <div className="App">
            <PostForm />
            <hr />
            <Posts />
          </div>
      </Provider>
    );
  }
}

export default App;
