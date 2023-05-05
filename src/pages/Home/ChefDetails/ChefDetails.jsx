import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetailsData = useLoaderData();
    const [chefs, setChefs] = useState([]);

    const { recipe_name, image, ingredients, cooking_method, rating } = chefDetailsData[0]
    const { name, year_of_experience, number_of_recipes, likes, img, short_bio } = chefs[0]
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div>
            <h1>{recipe_name}</h1>
        </div>
    );
};

export default ChefDetails;