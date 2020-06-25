import React from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Posts from './components/pages/Posts';
import NewPost from './components/pages/NewPost';
import Home from './components/pages/Home';
import { Provider } from 'react-redux';
import store from './store';




function App() {
  return (

    <Provider store={store}>
      <Router>
      <Header/>
      <div className="container">
        <Route exact path='/' component={Home}/>
        <Route path='/post' component={Posts}/>
        <Route path='/addPost' component={NewPost}/>
      </div>
    </Router>
    </Provider>
   
  );
}

export default App;
