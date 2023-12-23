import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import {Button} from "react-bootstrap";
import Home from './Pages/Home';
import Heroes from './Pages/Heroes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/heroes" element={ <Heroes /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
