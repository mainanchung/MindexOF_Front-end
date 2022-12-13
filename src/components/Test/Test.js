import  './Test.scss'
import { useState, useRef } from 'react';
import {Link} from 'react-scroll'



function Test({quiz, class_name, allAnswers, collectAnswers, scrollId}){

const [answers, setAnswers] = useState({})

const allTests = quiz

    const handleSubmit = (e) => {
        e.preventDefault();
        collectAnswers({...allAnswers,[class_name]:answers})   
    }

   const handleChange = (e) => {
    setAnswers({...answers, [e.target.name]: e.target.value})
    // collectAnswers({...allAnswers,[class_name]:answers})
  }
  
return(
        <div  className={class_name} id={class_name}> 
            {allTests.map(quiz => 
                    <div className='test__single' key={quiz.id} required="required">
                        <h2>{quiz.question}</h2>
                            <div className='test__select'>
                                <input 
                                required="required"
                                type="radio" 
                                name={`question${quiz.id}`} 
                                value={quiz.options[0].value}
                                onChange={handleChange}
                                />
                                <label className='test__option'>{quiz.options[0].choice}</label>                           
                            </div>
                            <div className='test__select'>
                                <input 
                                required="required"
                                type="radio" 
                                name={`question${quiz.id}`} 
                                value={quiz.options[1].value}
                                onChange={handleChange}
                                />
                                <label className='test__option' >{quiz.options[1].choice} </label>                           
                            </div>
                    </div>
                
            )}
           <Link activeClass="active" to={scrollId} spy={true} smooth={true}><button onClick={handleSubmit}  className='test__single-btn'> Next </button></Link>
    </div>
    )          
}

export default Test;