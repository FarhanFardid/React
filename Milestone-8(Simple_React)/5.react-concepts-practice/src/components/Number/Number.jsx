import React from 'react';
import  { add,subtract } from '../../utilities/operation';

const Number = () => {

    const apple = 120;
    const orange = 250;
    const mango = 150;
    const total = add(apple,orange,mango);
    const returnMoney = subtract(1000,total);
    return (
        <div style={{backgroundColor:'gray', padding:'5px'}}>
            <h2>The cart list: </h2>
            <p>Apple = {apple}</p> 
            <p>Orange = {orange}</p> 
            <p>Mango= {mango}</p> 
            <h4>Total price is: {total}</h4>
            <h5>Money returned: {returnMoney}</h5>
        </div>
    );
};

export default Number;