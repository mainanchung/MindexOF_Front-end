import  './Test.scss'
import test1 from '../../data/test.json'




function Test(){

    console.log(test1[0].question)

return(
        <section className='test'>
            
            
        <div>
 
        <h2>At a party do you:</h2>
        <div className='test__quiz'>
            <input type="radio" name='q1' value="e"/>
            <label>Interact with many, including strangers </label>                           
        </div>

        </div>
        </section>

)

}

export default Test;