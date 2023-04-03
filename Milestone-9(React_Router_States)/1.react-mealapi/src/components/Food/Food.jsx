import React from 'react';

const Food = (props) => {
    const {strMeal,strMealThumb,idMeal} =props.food;
    const addToMenu = props.addToMenu;
    // console.log(props.food);
    return (
        <div className='p-2 border border-success text-center col-4 rounded-2 '>
          
            <img  className='w-100 h-75 pb-2' src={strMealThumb} alt="meal"/>
            <h6 className='py-1'>Id: {idMeal}</h6>
            <h5 className='py-1'>Meal: {strMeal}  </h5>
            <button onClick={()=> addToMenu(props.food)} className='btn btn-info p-2 fw-bold hover:text-white '>Order Now</button>
            
        </div>
    );
};

export default Food;