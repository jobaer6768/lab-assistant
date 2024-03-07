import Card from "../../components/shared/Card";
import CardCollection from "../../components/shared/CardCollection";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <CardCollection></CardCollection>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
};

export default Home;
