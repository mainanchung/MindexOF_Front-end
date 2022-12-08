import  './Test.scss'
import { useState } from 'react';



function Test({quiz, class_name}){

   const allTests = quiz
   const [answers, setAnswers] = useState([])
   const handleChange = (e) => {
    e.preventdefault()
  }

    return(
        <form className={class_name} id={class_name}> 
            {allTests.map(quiz => 
                    <div className='test__single' key={quiz.id}>
                        <h2>{quiz.question}</h2>
                            <div className='test__select'>
                                <input 
                                type="radio" 
                                name={`question${quiz.id}`} 
                                value={quiz.options[0].value}
                                onChange
                                checked
                                />
                                <label>{quiz.options[0].choice}</label>                           
                            </div>
                            <div className='test__select'>
                                <input 
                                type="radio" 
                                name={`question${quiz.id}`} 
                                value={quiz.options[1].value}
                                onChange
                                checked/>
                                <label>{quiz.options[1].choice} </label>                           
                            </div>
                    </div>
                
            )}
          <button type="submit" onSubmit={handleChange}> NEXT </button>
    </form>
    )          
}

export default Test;