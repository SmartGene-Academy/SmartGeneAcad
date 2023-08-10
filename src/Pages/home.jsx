import React from 'react';
import NavBar from '../Components/navbar';
import './Styles/home.css'

function home(){
    return(
        <div>
             <NavBar ></NavBar>
             <div className='semi-circle'></div>
        </div>
    )
};

export default home;