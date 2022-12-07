import './TestPage.scss'
import TestBank from '../../data/test.json' 
import Test from '../../components/Test/Test';
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function TestPage(){
    // const navigate = useNavigate()
    // const goNextHandler = () =>{    
    // }
    return( 
        <>      
        <div className='hero'>

            <h1  className='test__title'>Let's Find Your Dream Job</h1>
            <p className='test__intro'>Understanding your Myers-Briggs personality type can help you identify careers you're best suited for.
             This insight can help you understand what type of work and workplace environment might best fit your personality. 
             Identifying a career path based on what you truly are!</p>
             <button className='test__start-btn' >Let's start !!</button>
        </div>

        <Test/>

        </> 


    )
}

export default TestPage;
