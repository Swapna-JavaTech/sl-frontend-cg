import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateShoppingList from "./components/create-shoppinglist.component";
import EditShoppingList from "./components/edit-shoppinglist.component";
import DisplayShoppingList from "./components/display-shoppinglist.component";
import HomeShoppingList from './components/home-shoppinglist.component';
import { FaHome } from "react-icons/fa";

function App() {
  return (
    <Router>
      <div className="container">
        <h2 className='text-center secondary'>MERN-Stack Shopping List</h2>
        <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
          <div className="container-fluid">
            <Link to="/home" className="navbar-brand"><FaHome style={{fontSize: '50px'}}/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
              aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarID">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link" style={{fontSize: '20px',fontWeight:'bold'}}>Shopping List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link" style={{fontSize: '20px',fontWeight:'bold'}}>Add To List</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Route path="/" exact component={DisplayShoppingList} />
        <Route path="/edit/:id" component={EditShoppingList} />
        <Route path="/create" component={CreateShoppingList} />
        <Route path="/home" component={HomeShoppingList} />
      </div>
    </Router>
  );
}

export default App;
