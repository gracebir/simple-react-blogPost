import React from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Posts from './components/pages/Posts';
import NewPost from './components/pages/NewPost';
import Home from './components/pages/Home';




function App() {
  return (
    <Router>
      <Header/>
      <div className="container">
        <Route exact path='/' component={Home}/>
        <Route path='/post' component={Posts}/>
        <Route path='/addPost' component={NewPost}/>
      </div>
    </Router>
  );
}

export default App;
