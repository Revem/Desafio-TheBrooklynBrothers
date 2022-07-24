import Catalogue from "../../components/Catalogue";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nuestros from "../../img/Nuestros.png";

function Home() {
  return (
    <>
      <Header />
      <img
        src={Nuestros}
        alt="Nuestros productos"
        className="p-5 lg:p-10 lg:ml-60 h-32 object-contain"
      />
      <Catalogue />
      <Footer />
    </>
  );
}

export default Home;
