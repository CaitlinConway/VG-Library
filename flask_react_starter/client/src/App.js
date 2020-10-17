import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import UserList from "./components/UsersList";
import { setUser } from "./store/authReducer";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import Homepage from "./components/Homepage";
import GameFeed from './components/GameFeed'
import Profile from './components/Profile'
const protectedRoute = ({ component: Component, loggedIn, ...rest }) => {
  if (loggedIn) return <Route {...rest} component={Component} />;
  else return <Redirect to="/" />;
};
const mapStateToProps = (state) => {
  return { loggedIn: !!state.auth.id };
};

const ConnectedProtectedRoute = connect(mapStateToProps, null)(protectedRoute);

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const loadUser = async () => {
      // enter your back end route to get the current user
      const res = await fetch("/api/users/current");
      if (res.ok) {
        res.data = await res.json(); // current user info - obj with key of user
        dispatch(setUser(res.data.userId, res.data.userEmail, res.data.userFirstName, res.data.userLastName, res.data.zipCode));
      }
      setLoading(false);
    }
    loadUser();
  }, [dispatch]);
  if (loading) return null;
  return (
    <BrowserRouter>
      {/* <nav>
        <ul className="nav-bar">
          <li className="nav-button-li">
            <NavLink to="/" activeclass="active" className="nav-button">
              Home
            </NavLink>
          </li>
          <li className="nav-button-li">
            <NavLink to="/users" activeclass="active" className="nav-button">
              Users
            </NavLink>
          </li>
        </ul>
      </nav> */}
      <Switch>
        <Route path="/login"
        // component={Login}
        render={(props) => <Login {...props}></Login>}
        />
        <Route path="/signup" component={SignUp} />
        <Route path="/consoles/:console"
        render={(props) => <GameFeed {...props}></GameFeed>}>
        {/* component={GameFeed}> */}
        </Route>
        <Route
          exact
          path="/"
          render={(props) => <Homepage {...props}></Homepage>}

        ></Route>
        <Route path="/users">
          <UserList />
        </Route>
        <ConnectedProtectedRoute path='/profile' render={(props) => <Profile {...props}></Profile>}></ConnectedProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
