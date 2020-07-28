import React from 'react';
import './App.css';
import {Provider} from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store'

// const store =  createStore(() => [],{}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Posts</h1>
        </header>
        <PostForm/>
        <hr></hr>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
