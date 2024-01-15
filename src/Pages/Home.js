import logo from '../logo.svg';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import {Button} from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import Carousel from "../Components/Carousel";
import Gamecard from '../Components/Gamecard';
import Jumbotron from '../Components/Jumbotron';
import Optioncards from '../Components/Optioncards';

function Home() {
  return (
    <div>
      <Header />
      <div class="row">
        <div class="col-lg-8"><Jumbotron /></div>
        <div class="col-lg-4"><Gamecard /></div>
      </div>
      <Optioncards />
      <Footer />
    </div>

  );
}

export default Home;
