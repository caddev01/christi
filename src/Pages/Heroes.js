import Header from "../Components/Header";
import Footer from "../Components/Footer";
import IntroJumbo from "../Components/IntroJumbo";
import Gamedeck from "../Components/Gamedeck";
// import Gamedeck from "../Components/GamedeckExtra";
import Footer2 from "../Components/Footer2";
import BottomCanvas from "../Components/BottomCanvas";
import CanvasSpot from "../Components/CanvasSpot";
import AnswersCarousel from "../Components/AnswersCarousel";
import GameParent from "../Components/GameParent";


export default function Heroes () {
    return(
        <div>
            <Header />
            {/* <Gamedeck /> */}
            <GameParent />
            <Footer2 />
        </div>
    );
};
