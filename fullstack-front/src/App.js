import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCar from "./cars/AddCar";
import EditCar from './cars/EditCar';
import ViewCar from './cars/ViewCar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
       <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/addCar" element={<AddCar />} />
          <Route exact path="/editCar/:id" element={<EditCar />} />
          <Route exact path="/viewCar/:id" element={<ViewCar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
