import Gallery from "../Gallery";
import Banner from "./Banner";
import NeedHelp from "./NeedHelp";
import ShopByTabs from "./ShopByTabs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByTabs></ShopByTabs>
            <NeedHelp></NeedHelp>
        </div>
    );
};

export default Home;