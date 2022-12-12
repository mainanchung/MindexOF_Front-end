import './TestPage.scss'
import Test1 from '../../data/test1.json'
import Test2 from '../../data/test2.json'
import Test3 from '../../data/test3.json'
import Test4 from '../../data/test4.json'  
import Test from '../../components/Test/Test';
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import {Link} from 'react-scroll'
import axios from 'axios';
import Header from '../../components/Header/Header'
import heroimg from '../../Assetes/image/HOME_img-01.svg'


function TestPage(){
    const [currentScore, setCurrentscore] = useState([]);
    const [userType, setUserType] = useState("");
    const navigate = useNavigate();
    console.log(userType)
    console.log(currentScore)  

    const getTotal = (e) => {
        e.preventDefault(); 
        let total =[]
        let totalForEachType = {}
        Object.values(currentScore).forEach(val => {
            Object.values(val).forEach(personality => {
                total.push(personality);
              });
          });
          //Array.prototype.reduce() works, too.
            total.forEach((i)=> { 
            totalForEachType[i] = (totalForEachType[i] || 0) + 1; 
            });

          console.log(total)
          console.log(totalForEachType)
          setCurrentscore(totalForEachType) 
            let type = '';
            type += (currentScore.e >= currentScore.i) ? "E" : "I";
            type += (currentScore.s >= currentScore.n) ? "S" : "N";
            type += (currentScore.t >= currentScore.f) ? "T" : "F";
            type += (currentScore.j >= currentScore.p) ? "J" : "P";
        setUserType(type)
        navigate(`/test/${userType}`)
    }

   

    return( 
        <> 
        <Header/>  
        <section className='test__body'>   
            <div className='test__hero'>
                    <div className='test__hero--text'>
                        <h1  className='test__title'>Finding Yourself<br/> Before<br/> Finding Your Job.</h1>
                        <p className='test__intro'>Understanding your Myers-Briggs personality type can help you identify careers you're best suited for.
                        This insight can help you understand what type of work and workplace environment might best fit your personality. 
                        Identifying a career path based on what you truly are!</p>
                        <Link activeClass="active" to="test__container" spy={true} smooth={true}> <button className='test__start-btn' >Let's start</button></Link>
                    </div>
                <div className='test__hero--imgbox'>    
                    <img className='test__hero--img' src={heroimg} alt='home-hero-img'/>
                </div>
            </div>
            <form  onSubmit={getTotal} className='test__all'> 
            <div className='test__container' id='test__container'>
                <Test   
                key={Test1.id}  
                quiz={Test1}
                scrollId="test2"
                class_name="test1"
                allAnswers={currentScore}
                collectAnswers={setCurrentscore}
                />
                <Test 
                key={Test2.id} 
                quiz={Test2}
                scrollId="test3"
                class_name="test2"
                allAnswers={currentScore}
                collectAnswers={setCurrentscore}
                />
                <Test 
                key={Test3.id}
                quiz={Test3}
                scrollId="test4"
                class_name="test3"
                allAnswers={currentScore}
                collectAnswers={setCurrentscore}
                />
                <Test 
                key={Test4.id} 
                quiz={Test4}
                scrollId="finish"
                class_name="test4"
                allAnswers={currentScore}
                collectAnswers={setCurrentscore}
                />
            </div>
            
            <div className='test__final' id='finish'>
            <button type='submit' className='test__finish-btn'>Finish</button>
                <img  className='test__final-img'src='' alt=''/>
            </div> 
            </form>    

        </section>    
        </> 
    )
}

export default TestPage;
