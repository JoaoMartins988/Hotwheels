import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCar from "./users/AddCar";
import EditCar from './users/EditCar';
import ViewCar from './users/ViewCar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddCar />} />
          <Route exact path="/editCar/:id" element={<EditCar />} />
          <Route exact path="/viewCar/:id" element={<ViewCar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
