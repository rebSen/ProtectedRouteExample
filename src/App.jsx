import React, {
  Component
} from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  // Redirect,
  withRouter
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import AuthButton from './DUMB/AuthButton'
import ProtectedRoute from './HOC/ProtectedRouteHOC'
import Login from './Login'



const Public = () => <h3>Public Content</h3>;

const Protected = () => <h3>Protected Content</h3>;




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Router Protection Sample</h1>
        </header>
        <BrowserRouter>
          <div>
            <AuthButton />
            <ul>
              <li><Link to="/public">Public Content</Link></li>
              <li><Link to="/protected">Protected Content</Link></li>
            </ul>
            <Route path="/public" component={Public} />
            <Route path="/login" component={withRouter(Login)} />
            <ProtectedRoute path='/protected' component={Protected} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;