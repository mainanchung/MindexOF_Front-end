import  './Test.scss'
import { useState } from 'react';



function Test({quiz, class_name, allAnswers, collectAnswers}){

const [answers, setAnswers] = useState({})

   const allTests = quiz

    const handleSubmit = (e) => {
        e.preventDefault();
        collectAnswers({...allAnswers,[class_name]:answers})
    }

   const handleChange = (e) => {
    setAnswers({...answers, [e.target.name]: e.target.value})
  }
  
return(
        <form  onSubmit={handleSubmit} className={class_name} id={class_name}> 
            {allTests.map(quiz => 
                    <div className='test__single' key={quiz.id}>
                        <h2>{quiz.question}</h2>
                            <div className='test__select'>
                                <input 
                                type="radio" 
                                name={`question${quiz.id}`} 
                                value={quiz.options[0].value}
                                onChange={handleChange}
                                />
                                <label className='test__option'>{quiz.options[0].choice}</label>                           
                            </div>
                            <div className='test__select'>
                                <input 
                                type="radio" 
                                name={`question${quiz.id}`} 
                                value={quiz.options[1].value}
                                onChange={handleChange}
                                />
                                <label className='test__option' >{quiz.options[1].choice} </label>                           
                            </div>
                    </div>
                
            )}
          <button type="submit"> NEXT </button>
    </form>
    )          
}

export default Test;