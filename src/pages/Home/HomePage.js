import './HomePage.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from '../../components/Header/Header';
import heroImg from '../../Assetes/image/DIRECTION.svg'


function HomePage({jobCart}){
    useEffect(() => {Aos.init({duration:1000});},[])

    return( 
        <> 
        <div className='home__container'>
            <Header
            jobCart={jobCart}
            />
                <div className='home__hero'>

                    <div data-aos="fade-right" className='home__hero-content'>

                    <h1  className='home__title'>Selecting  <br/>Your <br/> Dream Job</h1>
                    <p className='home__intro'> Everyone has different dreams depending on their personal preferences and goals.
                    When choosing a dream job, most people are looking for an occupation that challenges them and they enjoy.
                    Understanding your personality type can largely help you identify a career path This insight can help you understand what type of work and workplace environment might best fit your personality!
                    <br/>SO, LET'S START IT!</p>
                    <NavLink  to={"/test"} className='home__link'><button className='home__navigate-btn'>Start the test</button></NavLink>
                    </div>

                    <img data-aos="fade-right" className='home__hero--image' src={heroImg} alt='heroImg' />
                    
                </div>
        </div>  

        </> 


    )
}

export default HomePage;
