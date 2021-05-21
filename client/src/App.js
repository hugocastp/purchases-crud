import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ComprasList from "./components/ComprasList"
import ActualizarCompra from "./components/ActualizarCompra"
import CrearCompra from "./components/CrearCompra"

function App() {
  return (
    <Router>
        
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Inicio</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/actualizar" className="nav-link">Editar</Link>
              </li>
              <li className="navbar-item">
                <Link to="/crear" className="nav-link">Altas / Bajas</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route exact path="/" component={ComprasList} />
        <Route exact path="/actualizar" component={ActualizarCompra} />
        <Route exact path="/crear" component={CrearCompra} />
      </div>
    </Router>
    
  );
}

export default App;
