import React from 'react';
import "./Country.css";

const Country = (props) => {
    const {name, capital, population, languages, region, flag} = props.country;
    return (
        <div className="country">
            <div className="country-flag">
                <img src={flag} alt=""/>
            </div>
            <div className="country-info">
                <h3>{name}</h3>
                <p> Capital: {capital}</p>
                <p> Languages: {languages[0].name}</p>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
            </div>
        </div>
    );
};

export default Country;