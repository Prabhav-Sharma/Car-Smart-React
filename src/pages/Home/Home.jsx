import { CarouselCard, Footer, ArrivalCard } from "../../components";
import { useDocumentTitle } from "../../hooks";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  useDocumentTitle("CarSmart");

  return (
    <main className="flex-column home-main">
      <section className="home-section">
        <div className="top-wrapper flex-row">
          <CarouselCard
            src={
              "https://res.cloudinary.com/carsmart/image/upload/v1647405499/Product%20Categories/SUV_jmljyj.webp"
            }
            text={"SUV"}
          />
          <CarouselCard
            src={
              "https://res.cloudinary.com/carsmart/image/upload/v1647405497/Product%20Categories/Sedan_bok3uz.jpg"
            }
            text={"Sedan"}
          />
          <CarouselCard
            src={
              "https://res.cloudinary.com/carsmart/image/upload/v1647405461/Product%20Categories/hatchback_oyydlk.webp"
            }
            text={"Hatchback"}
          />
          <CarouselCard
            src={
              "https://res.cloudinary.com/carsmart/image/upload/v1647405499/Product%20Categories/convertible_yx2xnk.jpg"
            }
            text={"Luxury"}
          />
          <CarouselCard
            src={
              "https://res.cloudinary.com/carsmart/image/upload/v1647405498/Product%20Categories/sport_sczusj.webp"
            }
            text={"EV"}
          />
        </div>
      </section>
      <section>
        <div className="hero-img">
          <Link to="/products">
            <img src="https://res.cloudinary.com/carsmart/image/upload/v1647405398/UI%20Images/1920x1080_A1814530_large_fspnfx.jpg" />
          </Link>
          <p className="para-l hero-img-text">
            The Cars of the Future, The Future Is Now!
          </p>
          <Link to="/products" className="hero-overlay">
            View Products!
          </Link>
        </div>
      </section>
      <section>
        <div className="arrival-wrapper flex-row">
          <ArrivalCard />
          <ArrivalCard />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
