import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce( (sum, country) => sum + country.population, 0 );
    return (
        <div>
            <h4>Country Added: {cart.length}</h4>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;