import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props)
    const {name, area, population,flags} = props.country;
    return (
        <div className='country'>
           <h3>Country Name: {name.common}</h3>
           <h4>Population: {population}</h4>
           <h5>Area: {area}</h5>
           <p><img style={{height:'200px', width:'300px'}}src={flags.png} alt="flag"/></p>
        </div>
    );
};

export default Country;