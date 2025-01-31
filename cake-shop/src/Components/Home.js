import React from 'react';
import './Home.css';
import Navbar from '../Components/Navbar'; // Ensure correct path
import image1 from '../Assets/c1.jpg'; // Update paths if needed
import image2 from '../Assets/c3.jpg';
import image3 from '../Assets/c4.jpg';
import Cursor from '../Components/Cursor'; // Correct path for Cursor

const Home = () => {
    return (
        <>
            <Cursor /> {/* Add the Cursor component here */}
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
