import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Switch, Link, Route, useHistory } from 'react-router-dom';
import Admin from './Admin';

function App() {
  return (

      <Router>
          <Route exact path="/" component={Login} />
          <Route path="/Admin" component={Admin} />
          
      </Router>

  );
}

export default App;
