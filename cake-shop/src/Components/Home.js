import React from 'react';
import './Home.css';
import Navbar from '../Components/Navbar'; // Ensure correct path
import image1 from '../Assets/Home-1.webp'; // Update paths if needed
import image2 from '../Assets/Home-2.webp';
import image3 from '../Assets/Home-3.jpg';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <div className="image-section">
                    <div className="image-wrapper">
                        <img src={image1} alt="Delicious Cake 1" className="main-image" />
                        <img src={image2} alt="Delicious Cake 2" className="main-image" />
                        <img src={image3} alt="Delicious Cake 3" className="main-image" />
                        <div className="text-overlay">
                            <h1 className="title">Welcome to Our Cake Shop</h1>
                            <p className="description">
                                Indulge in our delightful creations crafted with love and the finest ingredients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
