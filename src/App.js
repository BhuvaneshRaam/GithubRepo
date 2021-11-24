import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/Layout';

export default function App() {
  return(
    <Router>
          <Switch>
                <Route exact path = "/Home" component = {Home} />
          </Switch>
    </Router>
  )
}
