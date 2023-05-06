import React from 'react';
import Banner from '../Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';
import FamousFood from '../FamousFood/FamousFood';
import FoodFAQ from '../FoodFAQ/FoodFAQ';

const Home = () => {
    return (
        <div>
            <Banner />
            <FamousFood />
            <ChefSection />
            <FoodFAQ />
        </div>
    );
};

export default Home;