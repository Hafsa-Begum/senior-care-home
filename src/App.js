import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import SingleService from './components/Home/SingleService/SingleService';
import Login from './components/Login/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from '../src/components/Login/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';
import Register from './components/Login/Register/Register';
import About from './components/About/About/About';
import JobHere from './components/Home/Career/JobHere';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/services'>
              <Services></Services>
            </Route>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <PrivateRoute exact path='/career'>
              <JobHere></JobHere>
            </PrivateRoute>
            <PrivateRoute exact path='/service/:serviceId'>
              <SingleService></SingleService>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
