import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import {Button} from "react-bootstrap";
import Home from './Pages/Home';
import Heroes from './Pages/Heroes';
import Board from './Pages/Board';
import Apostles from './Pages/Apostles';
import Trials from './Pages/Trials';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/heroes" element={ <Heroes /> } />
        <Route path="/board" element={ <Board /> } />
        <Route path="/apostles" element={ <Apostles /> } />
        <Route path="/trials" element={ <Trials /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
