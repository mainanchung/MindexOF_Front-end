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
import test1img from '../../Assetes/image/star-partial.svg'
import test2img from '../../Assetes/image/work2.svg'
import test3img from '../../Assetes/image/work1.svg'
import test4img from '../../Assetes/image/clients.svg'


function TestPage(){
    const [currentScore, setCurrentscore] = useState([]);
    const [userType, setUserType] = useState("");
    const navigate = useNavigate();
    
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
            console.log(totalForEachType.e +">="+ totalForEachType.i);
            type += (totalForEachType.e >= totalForEachType.i||0) ? "E" : "I";
            type += (totalForEachType.s >= totalForEachType.n||0) ? "S" : "N";
            type += (totalForEachType.t >= totalForEachType.f||0) ? "T" : "F";
            type += (totalForEachType.j >= totalForEachType.p||0) ? "J" : "P";
        setUserType(type)
        console.log(type)
        navigate(`/test/${type}`)
    }
    console.log(userType)

   

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
                        <Link activeClass="active" to="test1" spy={true} smooth={true}> <button className='test__start-btn' >Let's start</button></Link>
                    </div>
                <div className='test__hero--imgbox'>    
                    <img className='test__hero--img' src={heroimg} alt='home-hero-img'/>
                </div>
            </div>
            <form  onSubmit={getTotal} className='test__all'> 
            <div className='test__container' id='test__container'>
                <div className='test-box__1'>
                    <Test   
                    key={Test1.id}  
                    quiz={Test1}
                    scrollId="test2"
                    class_name="test1"
                    allAnswers={currentScore}
                    collectAnswers={setCurrentscore}
                    />
                    <img src={test1img} alt='test1img'/>
                </div>
                <div className='test-box__2'>
                    <Test 
                    key={Test2.id} 
                    quiz={Test2}
                    scrollId="test3"
                    class_name="test2"
                    allAnswers={currentScore}
                    collectAnswers={setCurrentscore}
                    />
                     <img src={test2img} alt='test2img'/>
                </div>
                <div className='test-box__3'>
                    <Test 
                    key={Test3.id}
                    quiz={Test3}
                    scrollId="test4"
                    class_name="test3"
                    allAnswers={currentScore}
                    collectAnswers={setCurrentscore}
                    />
                     <img src={test3img} alt='test3img'/>
                </div>
                <div className='test-box__4'>
                    <Test 
                    key={Test4.id} 
                    quiz={Test4}
                    scrollId="finish"
                    class_name="test4"
                    allAnswers={currentScore}
                    collectAnswers={setCurrentscore}
                    />
                     <img src={test4img} alt='test4img'/>
                </div>
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
