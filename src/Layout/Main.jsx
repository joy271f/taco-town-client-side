import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Banner from '../pages/Home/Banner/Banner';
import ChefSection from '../pages/Home/ChefSection/ChefSection';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header />
            <Banner />
            <ChefSection />
            <Footer />
        </div>
    );
};

export default Main;