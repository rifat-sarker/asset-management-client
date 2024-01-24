import About from "../About/About";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Package from "../Package/Package";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Package></Package>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;