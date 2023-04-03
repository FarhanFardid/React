import React from 'react';

const Order = (props) => {
    const {additem} = props;
    let size = additem.length;
    let show = false;
    if(size > 0){
        show = true;
    }
    return (
        <div className='p-2 mt-3 position-sticky top-0'>
               <h3 className="fw-bold">Items Added to Order Card</h3>
            <h4 className='pb-3'>Total Items Added: {size}</h4>
            
                {show && additem.map(item => <li className='p-2' style={{listStyleType:'decimal',fontSize:"x-large"}}>{item.strMeal}</li>)}
            
        </div>
    );
};

export default Order;