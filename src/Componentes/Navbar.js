import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Navbar = () => {

function onSearch(e){
    axios("https://superheroapi.com/api/5644245112284225")
    .then(result => {
        return result.json()
    }).then(name => {
        console.log(name)
    }).catch(error => {
        console.log(error)
    })
}

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand">Alkemy Heroes</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={`/Home`}>Home</Link>
              </li>
              <li className="nav-item" aria-current="page">
                <Link to= {`/Equipo`}>Equipo</Link>
              </li>
              <li className="nav-item" aria-current="page">
                <Link to={`/Login`}>Login</Link>
              </li>
            </ul>
            <form className="d-flex container-fluid">
              <input className="form-control me-2" type="search" placeholder="Buscar Heroe" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" onClick={onSearch}>Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
