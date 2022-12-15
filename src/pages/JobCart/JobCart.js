import './JobCart.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import deletIcon from '../../Assetes/icon/trash.svg'

const getJobCartFromLocalStorage = JSON.parse(localStorage.getItem("cart")|| "[]")

function JobCart(){
    const [savedJobCart, setSavedJobCart] = useState(getJobCartFromLocalStorage);


    // console.log(savedJobCart)

    return( 
        <> 
        <Header 
        handleCartChange = {setSavedJobCart}
        />
        <div className='cart'>
                <div className='cart__container'>
                <h1  className='cart__title'>My Jobs  <span>({savedJobCart.length})</span> </h1>
                    <div className='cart__list'>
                        {savedJobCart.map(item =>
                            <div className='cart-card'>
                            <h2 className='cart-card__title'>{item.title}</h2>
                                        <p className='cart-card__info'>{item.company.display_name}</p>
                                        <p className='cart-card__info'>{item.location.area[1]}  {item.location.area[0]}</p>             
                              <div className='cart-card__function'>
                                <img src={deletIcon} alt='delete-icon'  onClick className='cart-card__delete'/>
                                <a className="cart-card__url" href={item.redirect_url}> <button className='cart-card__btn'>Apply</button></a>
                              </div>
                            </div>                      
                            )}
                    </div>
                </div>
        </div>  

        </> 


    )
}

export default JobCart;