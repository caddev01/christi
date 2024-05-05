import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Progressbar from "../Components/Progress";
import Footer2 from "../Components/Footer2";
import UsersTable from "../Components/UsersTable";
import TopSaint from "../Components/TopSaint";

export default function Board () {
    return(
        <div>
            <Header />
            <Progressbar /> 
            <UsersTable />
            <TopSaint />
            <Footer />
        </div>
    );
};