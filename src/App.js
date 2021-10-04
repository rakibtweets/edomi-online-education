import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import About from './Components/About/About';
// import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import AllCourses from './Components/AllCourses/AllCourses';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/courses">
            <AllCourses />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
