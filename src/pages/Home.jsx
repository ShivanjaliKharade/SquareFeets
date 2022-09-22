import Header from "../components/Header";
import Howitworks from "../components/Howitworks";
import About from "../components/about";
import Properties from "../components/Properties";
import Footer from "../components/Footer";
import Roles from "../components/Roles";

function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <Howitworks />
      <About />
      <Roles />
      <Properties />
      <Footer />
    </div>
  );
}

export default Homepage;
