import './SingleType.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import JobTicket from '../../components/JobTicket/JobTicket';
import axios from 'axios';


const getJobCartFromLocalStorage = JSON.parse(localStorage.getItem("cart")|| "[]")


function SingleType(){
    const singleType = useParams().id;
    const [defaultJob, setDefaultJob] = useState("")
    const [currentJobData, setCurrentJobData] = useState([])
    const [targetType, setTargetType] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [value, setValue] = useState("");
    const [jobCart, setJobCart] = useState(getJobCartFromLocalStorage);


    //get jobs based on target type's data.
    const getJobs = (career) => {
        axios.post(`http://localhost:8080/jobs/search`, 
        {
            career: career
        }
        ).then((response) => {
            setCurrentJobData(response.data.jobs||[])
            setIsLoaded(true)
        }).catch((error) => {
            console.log(error)
        })
    }
    //get target type data
    useEffect(() => {
        axios.get(`http://localhost:8080/types/${singleType}`).then((response) => {
            setTargetType(response.data)
            let defaultCareer = response.data[0].career[0]
            setDefaultJob(defaultCareer)
            getJobs(defaultCareer)
           }).catch((error)=> {
                console.log(error)
            })
    },[])

    //search function
    const onChange = (event) => {
        setValue(event.target.value);
      };

    const onSearchValue = (input) => {
        setValue(input);
    // our api to fetch the search result
    }

    const onSearch = (value) => {
        getJobs(value)
        setValue("")
    }

    //add job to cart

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(jobCart))
    },[jobCart])


    return( 
        <>
        {targetType.length?
        <>
        <div className='type__container'>
            <Header 
            jobCartCount={jobCart} />
              <div className='type'>
                        <div className='type__box'>
                            <div className='type__image-box'>
                                <img className='type__image' src={targetType[0].image} alt="type" />
                            </div>
                                <div className='type__content'>
                                    <div className='type__type-name'>
                                        <h1  className='type__title'>THE <br/>{targetType[0].type_name}</h1>
                                        <h3 className='type__subtitle'>{targetType[0].type}</h3>
                                    </div>
                                    <div className='type__text'>    
                                            <p className='type__intro'>{targetType[0].description}</p>
                                        <div className='type__traits'>
                                            <h4 className='type__box-title'>You are...</h4>
                                            <div className='type__traits-list'>
                                            {targetType[0].trait.map(ele =>
                                            <p className='type__trait'>{ele}</p>
                                            )}
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                        </div> 

                        <div className='jobs'>
                            <h2 className='jobs__title'>Explore Your Potential Career Paths :</h2>
                            
                            <div className='jobs__search-container'>
                                <div className='jobs__search-box'>
                                    <input
                                        className='jobs__search-input'
                                        type="text"
                                        onChange={onChange}
                                        placeholder={`Explore here   (ex. ${defaultJob})`}
                                        value={value}
                                    />
                                    <button onClick={() => onSearch(value)} className="jobs__search--btn"> Search </button>    
                                </div>
                                <div className="jobs__search--dropdown">
                     
                                    {targetType.length && value.length?
                                        targetType[0].career.filter(ele => ele.toLowerCase().includes(value.toLowerCase() )).map((job) => { 
                                            console.log('value', value);
                                            console.log('job', job);
                                            return <div
                                                onClick={() => onSearchValue(job)}
                                                className="jobs__search--row"
                                                key={job}
                                            >
                                                {job}
                                            </div>
                                            })
                                    : ""}
                            </div>
                            </div>    

                          <div className='jobs__ticket-list'>
                            {
                                isLoaded ? 
                                currentJobData.map((job) => 
                                    <JobTicket
                                        key={job.id}
                                        job = {job}
                                        addJobHandler = {setJobCart}
                                        jobCart = {jobCart}
                                    />    
                                ) 
                                : 
                                <div className='loading'><h1>Loading...</h1></div>
                            }
                            </div>  

                        </div>
                </div> 
            </div> </>:
            <div className='loading'><h1>Loading...</h1></div>}
        </>       
     
    )
}

export default SingleType;