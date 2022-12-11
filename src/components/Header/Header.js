import './Header.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Header(){
   
   
    return( 
        <>      
        <div className='header'>
            <div>
                <div className='header__links'>
                    <NavLink to={"/"} className='header__link'>Home</NavLink>
                    <NavLink className='header__link'>Sign up</NavLink>
                </div>
             </div>
        </div>
        </> 
    )
}

export default Header;