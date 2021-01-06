import logo from './logo.svg';
import './App.css';
import Login from './containers/Login/Login';
import Search from './containers/Search/Search';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';

function App() {
  return (
    <Switch>
    <Route exact path = '/' component={Login}>
    </Route>
    <Route path = '/search'>
      <Search />
    </Route>
  </Switch>
  );
}

export default App;
