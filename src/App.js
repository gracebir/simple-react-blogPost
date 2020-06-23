import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Posts from './components/pages/Posts';



function App() {
  return (
    <Router>
      <Header/>
      <div className="container">
        <Posts/>
      </div>
    </Router>
  );
}

export default App;
