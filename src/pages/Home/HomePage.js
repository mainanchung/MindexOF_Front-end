import './HomePage.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideBar from '../../components/sideBar/SideBar';
import Header from '../../components/Header/Header';
import heroImg from '../../Assetes/image/DIRECTION.svg'




function HomePage(){
   
   
    return( 
        <> 
        <div className='home__container'>
            <Header/>
                <div className='home__hero'>

                    <div className='home__hero-content'>

                    <h1  className='home__title'>Selecting  <br/>Your <br/> Dream Job</h1>
                    <p className='home__intro'> Everyone has different dreams depending on their personal preferences and goals.
                    When choosing a dream job, most people are looking for an occupation that challenges them and they enjoy.
                    Understanding your personality type can largely help you identify a career path This insight can help you understand what type of work and workplace environment might best fit your personality!
                    <br/>SO, LET'S START IT!</p>
                    <NavLink  to={"/test"} className='home__link'><button className='home__navigate-btn'>Start the test</button></NavLink>
                    </div>

                    <img className='home__hero--image' src={heroImg} alt='heroImg' />
                    
                </div>
        </div>  

        </> 


    )
}

export default HomePage;
