
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';
import Navbar from './Componentes/Navbar';
import Equipo from './Equipo/equipo';
import Login from './Login/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/Equipo">
              <Equipo />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
