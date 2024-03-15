import Card from "../../components/shared/Card";
import Footer from "../../components/shared/Footer";
import AddDevice from "../AddDevice/AddDevice";
import Lab from "../Lab/Lab";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Lab></Lab>
      <Card></Card>
      <AddDevice></AddDevice>
      <Footer></Footer>
    </div>
  );
};

export default Home;
