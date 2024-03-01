import Header from "../Components/Header";
import Footer from "../Components/Footer";
import IntroJumbo from "../Components/IntroJumbo";
import Gamedeck from "../Components/Gamedeck";
import Footer2 from "../Components/Footer2";
import Offcanvas from "../Components/Offcanvas";
import CanvasSpot from "../Components/CanvasSpot";

export default function Heroes () {
    return(
        <div>
            <Header />
            {/* <IntroJumbo /> */}
            <Gamedeck />
            {/* <Offcanvas /> */}
            <CanvasSpot />
            <Footer2 />
        </div>
    );
};
