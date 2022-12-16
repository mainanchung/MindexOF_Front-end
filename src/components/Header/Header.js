import './Header.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import cartIcon from '../../Assetes/icon/label.svg';
import homeIcon from '../../Assetes/icon/home.svg';
import personIcon from '../../Assetes/icon/person2.svg';
import testIcon from '../../Assetes/icon/test2.svg';
import LOGO from '../../Assetes/icon/LOGO.svg';


const getJobCartFromLocalStorage = JSON.parse(localStorage.getItem("cart")|| "[]")

function Header({jobCart}){
 
    return( 
        <>      
            <div className='header'>
                <div className='header__container'>
                    <div  className='header__LOGO--box'>
                    <img className='header__LOGO' src={LOGO} alt='LOGO'/>
                    <p className='header__LOGO--text'>MindexOF</p>
                    </div>
                    <div className='header__links'>
                    <NavLink to={"/"} className='header__link'>
                        <div className='header__links--home'>
                            <img className='header__links--icon' src={homeIcon} alt='cartIcon'/>
                            <p className='header__links--text header__links--Home'>Home</p>
                        </div>
                    </NavLink>

                    <NavLink to={"/test"} className='header__link'>
                        <div className='header__links--test'>
                            <img className='header__links--icon' src={testIcon} alt='testIcon'/>
                            <p className='header__links--text header__links--text'>Test</p>
                        </div>
                    </NavLink>

                    <NavLink to={"/types"} className='header__link'>
                        <div className='header__links--type'>
                            <img className='header__links--icon' src={personIcon} alt='personIcon'/>
                            <p className='header__links--text header__links--type'>All Types</p>
                        </div>
                    </NavLink> 

                    <NavLink to={"/cart"} className='header__link' >
                        <div className='header__links--cart'>
                            <img className='header__links--icon' src={cartIcon} alt='cartIcon'/>
                            <p className='header__links--text header__links--cart'>My Jobs {jobCart.length? `(${jobCart.length})`:""}  </p>
                        </div>
                    </NavLink>   

                    </div>
                </div>
            </div>
        </> 
    )
}

export default Header;