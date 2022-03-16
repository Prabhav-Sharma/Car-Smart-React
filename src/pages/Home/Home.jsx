import { useEffect } from "react";
import "./home.css";
import Footer from "../../components/Footer/Footer";

const Home=()=>{

useEffect(()=>{
        document.title="CarSmart";
    },[]);


return (
<main className="flex-column home-main">
<section className="home-section">
    <div className="top-wrapper flex-row">
        <a href="/product/product.html" className="midtext-card">
            <div className="card-midtext">
                <div className="img-container">
                    <img src="https://res.cloudinary.com/carsmart/image/upload/v1647405499/Product%20Categories/SUV_jmljyj.webp"/></div>
                <p className="overlay-text">SUV</p>
            </div>
        </a>
        <a href="/product/product.html" className="midtext-card">
            <div className="card-midtext">
                <div className="img-container">
                    <img src="https://res.cloudinary.com/carsmart/image/upload/v1647405497/Product%20Categories/Sedan_bok3uz.jpg"/></div>
                <p className="overlay-text">Sedan</p>
            </div>
        </a>
        <a href="/product/product.html" className="midtext-card">
            <div className="card-midtext">
                <div className="img-container">
                    <img
                        src="https://res.cloudinary.com/carsmart/image/upload/v1647405461/Product%20Categories/hatchback_oyydlk.webp"/>
                </div>
                <p className="overlay-text">Hatchback</p>
            </div>
        </a>
        <a href="/product/product.html" className="midtext-card">
            <div className="card-midtext">
                <div className="img-container">
                    <img src="https://res.cloudinary.com/carsmart/image/upload/v1647405499/Product%20Categories/convertible_yx2xnk.jpg"/></div>
                <p className="overlay-text">Convertible</p>
            </div>
        </a>
        <a href="/product/product.html" className="midtext-card">
            <div className="card-midtext">
                <div className="img-container">
                    <img src="https://res.cloudinary.com/carsmart/image/upload/v1647405498/Product%20Categories/sport_sczusj.webp"/></div>
                <p className="overlay-text">Sport</p>
            </div>
        </a>
    </div>
</section>
<section>
    <div className="hero-img">
        <img
            src="https://res.cloudinary.com/carsmart/image/upload/v1647405398/UI%20Images/1920x1080_A1814530_large_fspnfx.jpg"/>
        <p className="para-l hero-img-text">The Cars of the Future, The Future Is Now!</p>
    </div>
</section>
<section>
    <div className="arrival-wrapper flex-row">
        <a href="product/product.html">
            <div className="arrival-card flex-row">
                <img className="arrival-card-img" src="https://res.cloudinary.com/carsmart/image/upload/v1647405497/Product%20Categories/Sedan_bok3uz.jpg"/>
                <div className="arrival-card-text flex-column">
                    <h5 className="text-gray">New Arrival</h5>
                    <div>
                        <h2>Radeon</h2>
                        <p className="para-s gray-text">Cargo space? No sir, car stays on the ground.</p>
                    </div>
                </div>
            </div>
        </a>
        <a href="product/product.html">
            <div className="arrival-card flex-row">
                <img className="arrival-card-img" src="https://res.cloudinary.com/carsmart/image/upload/v1647405498/Product%20Categories/sport_sczusj.webp"/>
                <div className="arrival-card-text flex-column">
                    <h5 className="text-gray">New Arrival</h5>
                    <div>
                        <h2>Electro</h2>
                        <p className="para-s gray-text">Cargo space? No sir, car stays on the ground.</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
</section>
<Footer/>
</main>)
}

export default Home;