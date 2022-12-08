import './TestPage.scss'
import Test1 from '../../data/test1.json'
import Test2 from '../../data/test2.json'
import Test3 from '../../data/test3.json'
import Test4 from '../../data/test4.json'  
import Test from '../../components/Test/Test';
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function TestPage(){
    const [currentScore, setCurrentscore] = useState([]);

    return( 
        <>      
        <div className='hero'>

            <h1  className='test__title'>Let's Find Your Dream Job</h1>
            <p className='test__intro'>Understanding your Myers-Briggs personality type can help you identify careers you're best suited for.
             This insight can help you understand what type of work and workplace environment might best fit your personality. 
             Identifying a career path based on what you truly are!</p>
             <button className='test__start-btn' >Let's start !!</button>
        </div>
            <Test
            key={Test1.id}  
            quiz={Test1}
            class_name="test1"
            />
            <Test 
            key={Test2.id} 
            quiz={Test2}
            class_name="test2"
            />
            <Test  
            key={Test3.id}
            quiz={Test3}
            class_name="test3"
            />
            <Test 
            key={Test4.id} 
            quiz={Test4}
            class_name="test4class_name"
            />
        </> 
    )
}

export default TestPage;
