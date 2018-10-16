import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/topics'}>Topics</Link></li>
      </ul>
      <hr/>
      <Route exact path={'/'} component={Home}/>
      <Route path={'/about'} component={About}/>
      <Route path={'/topics'} component={Topics}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({match}) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${match.url}/rendering1`}>rendering1</Link></li>
      <li><Link to={`${match.url}/rendering2`}>rendering2</Link></li>
      <li><Link to={`${match.url}/rendering3`}>rendering3</Link></li>
    </ul>
    <Route path={`${match.path}/:topicId`} component={Topic}/>
  </div>
)

const Topic = ({match})=>(
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default App;
