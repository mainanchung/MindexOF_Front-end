import './TestPage.scss'
import Test1 from '../../data/test1.json'
import Test2 from '../../data/test2.json'
import Test3 from '../../data/test3.json'
import Test4 from '../../data/test4.json'  
import Test from '../../components/Test/Test';
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header'


function TestPage(){
    const [currentScore, setCurrentscore] = useState([]);
    const [userType, setUserType] = useState("");
    console.log(userType)  

    const getTotal = () => {
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
    }

    console.log(userType)
    console.log(currentScore)

    return( 
        <> 
        <Header/>  
        <section className='test__body'>   
            <div className='hero'>

                <h1  className='test__title'>Finding Yourself<br/> Before<br/> Finding Your Job.</h1>
                <p className='test__intro'>Understanding your Myers-Briggs personality type can help you identify careers you're best suited for.
                This insight can help you understand what type of work and workplace environment might best fit your personality. 
                Identifying a career path based on what you truly are!</p>
                <button className='test__start-btn' >Let's start</button>
            </div>
            <div className='test__container'>
                <Test
                key={Test1.id}  
                quiz={Test1}
                class_name="test1"
                allAnswers={currentScore}
                collectAnswers={setCurrentscore}
                />
                <Test 
                key={Test2.id} 
                quiz={Test2}
                class_name="test2"
                allAnswers={currentScore}
                collectAnswers={setCurrentscore}
                />
                <Test  
                key={Test3.id}
                quiz={Test3}
                class_name="test3"
                allAnswers={currentScore}
                collectAnswers={setCurrentscore}
                />
                <Test 
                key={Test4.id} 
                quiz={Test4}
                class_name="test4"
                allAnswers={currentScore}
                collectAnswers={setCurrentscore}
                />
            </div>
            <div className='test__final'>
                <button onClick={getTotal} className='test__finish-btn'>Finish</button>
                <img  className='test__final-img'src='' alt=''/>
            </div>     

        </section>    
        </> 
    )
}

export default TestPage;
