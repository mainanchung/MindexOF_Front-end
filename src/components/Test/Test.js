import  './Test.scss'
import test1 from '../../data/test.json'

function Test(){
   const allTests = test1
   console.log(allTests.map(quiz => quiz.options[0].value))
return(
        <section className='test'> 
            {allTests.map(quiz => <>
                    <div className='test__single'>
                        <h2>{quiz.question}</h2>
                            <div className='test__select'>
                                <input type="radio" name={quiz.id} value={quiz.options[0].value}/>
                                <label>{quiz.options[0].choice}</label>                           
                            </div>
                            <div className='test__select'>
                                <input type="radio" name={quiz.id} value={quiz.options[1].value}/>
                                <label>{quiz.options[1].choice} </label>                           
                            </div>
                    </div>
                </>
            )}
    </section>
    )          
}


export default Test;