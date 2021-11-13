import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Allpens from './pages/Allpens/AllPens/Allpens';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Purchase from './pages/Purchase/Purchase';
import Dashborad from './pages/Dashboard/Dashboard/Dashborad';
import PrivateRoute from './pages/Login/PrivareRoute/PrivareRoute';
import NotFound from './pages/NotFound/NotFound';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>



          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute exact path='/purchase/:id'>
            <Purchase></Purchase>
          </PrivateRoute>
          <Route exact path='/allPens'>
            <Allpens></Allpens>
          </Route>

          <PrivateRoute path='/dashbord'>
            <Dashborad></Dashborad>
          </PrivateRoute>
          <Route exact path='*'>
          <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>
    </AuthProvider>

  );
}

export default App;
