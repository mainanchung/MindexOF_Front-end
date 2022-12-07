import './HomePage.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';




function HomePage(){
    const navigate = useNavigate()
    const goNextHandler = () =>{ 
    }
    return( 
        <>      
        <div className='hero'>

            <h1  className='test__title'>Let's Find Your Dream Job</h1>
            <p className='test__intro'>Understanding your Myers-Briggs personality type can help you identify careers you're best suited for.
             This insight can help you understand what type of work and workplace environment might best fit your personality. 
             Identifying a career path based on your Myers-Briggs type can time and research.</p>
             <button className='test__navigate-btn' onClick={goNextHandler}>Start the test</button>

             <img className='hero__image' src='' alt='' />
        </div>

        </> 


    )
}

export default HomePage;
