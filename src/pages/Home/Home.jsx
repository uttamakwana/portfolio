import { Link } from "react-router-dom";
// importing home.css
import "./home.css";
import { Navigation } from "../../components";

const Home = () => {
  return (
    <section className="main-content flex-between pi-1 home-content main-content-flex-column">
      {/* Intro */}
      <div className="main-intro-container">
        <h1 className="main-intro font-extrabold clr-secondary fs-3">
          <strong className="clr-tertiory">Uttam Makwana,</strong> Full Stack
          Developer <strong className="clr-tertiory">&</strong> Designer{" "}
          <strong className="clr-tertiory">Welcomes you</strong> to his
          Portfolio.
        </h1>
      </div>
      {/* Navigation */}
      <Navigation />
    </section>
  );
};

export default Home;
