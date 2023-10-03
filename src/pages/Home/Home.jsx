import BreakingNews from "../Shared/Header/BreakingNews";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    <h2>News Coming Soon</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;