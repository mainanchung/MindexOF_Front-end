import './Header.scss'
import {  NavLink } from 'react-router-dom';
import {  useState } from 'react';
import cartIcon from '../../Assetes/icon/label.svg';
import homeIcon from '../../Assetes/icon/home.svg';
import personIcon from '../../Assetes/icon/person2.svg';
import testIcon from '../../Assetes/icon/test2.svg';
import LOGO from '../../Assetes/icon/LOGO.svg';
import User from '../../Assetes/icon/user.svg'


const getJobCartFromLocalStorage = JSON.parse(localStorage.getItem("cart")|| "[]")

function Header({jobCart}){

    const [isOpen, setIsOpen] = useState(false);
 
    return( 
        <>      
            <div className='header'>
                <div className='header__container'>
                    <NavLink to={"/"} className='header__LOGO--link'>
                        <div  className='header__LOGO--box'>
                            <img className='header__LOGO' src={LOGO} alt='LOGO'/>
                            <p className='header__LOGO--text'>MindexOF</p>
                        </div>
                    </NavLink>
                    {/* hamburger menu */}
              
                    <div className={`header__links ${isOpen? "open" : ""}`}>
                        <NavLink to={"/"} className='header__link'>
                            <div className='header__links--home'>
                                <img className='header__links--icon' src={homeIcon} alt='cartIcon'/>
                                <p className='header__links--text '>Home</p>
                            </div>
                        </NavLink>

                        <NavLink to={"/test"} className='header__link'>
                            <div className='header__links--test'>
                                <img className='header__links--icon' src={testIcon} alt='testIcon'/>
                                <p className='header__links--text '>Test</p>
                            </div>
                        </NavLink>

                        <NavLink to={"/types"} className='header__link'>
                            <div className='header__links--type'>
                                <img className='header__links--icon' src={personIcon} alt='personIcon'/>
                                <p className='header__links--text '>All Types</p>
                            </div>
                        </NavLink> 

                        <NavLink to={"/cart"} className='header__link' >
                            <div className='header__links--cart'>
                                <img className='header__links--icon' src={cartIcon} alt='cartIcon'/>
                                <p className='header__links--text '>My Jobs {jobCart.length? `(${jobCart.length})`:""}  </p>
                            </div>
                        </NavLink>  

                    </div>
                    <div
                        className={`header__toggle ${isOpen? "open" : ""}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default Header;