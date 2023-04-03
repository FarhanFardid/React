import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <nav className="row  container-fluid bg-secondary align-items-center p-3 m-0">
            <div className="col-lg-7">
                <h2 className='fw-bolder fs-1 p-2'>Food Valley</h2>
            </div>
            <div className="col-lg-5 ">
                <ul className='d-flex justify-content-around p-2  list-unstyled'>
                    <li ><a className="text-decoration-none text-white fw-bolder fs-5 hover:bg-dark" href="#home">Home</a></li>
                    <li><a  className='text-decoration-none text-white fw-bolder fs-5' href="#food">Food</a></li>
                    <li><a  className='text-decoration-none text-white fw-bolder fs-5' href="#fav">Order</a></li>
                    <li><a  className='text-decoration-none text-white fw-bolder fs-5' href="#contact">Contact Us</a></li>
                </ul>
            </div>
            
        </nav>
    );
};

export default Header;