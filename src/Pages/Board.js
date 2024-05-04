import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Progressbar from "../Components/Progress";
import Footer2 from "../Components/Footer2";
import UsersTable from "../Components/UsersTable";

export default function Board () {
    return(
        <div>
            <Header />
            <Progressbar /> 
            <UsersTable />
            <Footer2 />
        </div>
    );
};