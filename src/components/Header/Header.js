import './Header.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const getJobCartFromLocalStorage = JSON.parse(localStorage.getItem("cart")|| "[]")

function Header({jobCart}){
 
    return( 
        <>      
        <div className='header'>
            <div>
                <div className='header__links'>
                <NavLink to={"/"} className='header__link'>Home</NavLink>
                <NavLink to={"/test"} className='header__link'>Test</NavLink>
                <NavLink to={"/types"} className='header__link'>All Types</NavLink>
                <NavLink to={"/cart"} className='header__link' >My Jobs {jobCart.length? `(${jobCart.length})`:""}</NavLink>    
                </div>
             </div>
        </div>
        </> 
    )
}

export default Header;