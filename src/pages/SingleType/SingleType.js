import './SingleType.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import locations from '../../data/location.json';
import Header from '../../components/Header/Header';
import JobTicket from '../../components/JobTicket/JobTicket';
import axios from 'axios';





function SingleType({ jobCart,setJobCart}){
    
    const singleType = useParams().id;
    const [defaultJob, setDefaultJob] = useState("")
    const [currentJobData, setCurrentJobData] = useState([])
    const [targetType, setTargetType] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [value, setValue] = useState("")
    const [locationValue, setLocationValue] = useState("")
    const [locationCode, setLocationCode] = useState("")
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState(false);
   
    

    //get jobs based on target type's data.
    const getJobs = (career,location) => {
        axios.post(`http://localhost:8080/jobs/search`, 
        {
            career: career,
            location:location
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
        setSelect(true);
      };
    // select job title
    const onSearchValue = (input) => {
        setValue(input);
        setSelect(false);
    }

   
    //select location
    const onLocationChange = (event) => {
        setLocationValue(event.target.value)
        setOpen(true)
    }

    //show options by clicking
    const onInputClick = () => {
        setOpen((prevValue) => !prevValue);
    }

    //select location by clicking
    const onOptionSelected = (option) => {
        setLocationValue(option.location);
        setLocationCode(option.code)
        setOpen(true);
      };

   //search button
      const onSearch = (value) => {
        getJobs(value)
        setValue("")
        setLocationValue("")
    }



    //add job to cart and store job in local storage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(jobCart))
    },[jobCart])


    return( 
        <>
        {targetType.length?
        <>
        <div className='type__container'>
            <Header 
            jobCart={jobCart}
            setJobCart={setJobCart} />
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
                            
                            {/* Job search */}
                            <div className='jobs__search-container'>

                            {/* Job search:title */}
                                <div className='jobs__search-box'>
                                    <input
                                        className='jobs__search-input'
                                        type="text"
                                        onChange={onChange}
                                        placeholder={`(ex. ${defaultJob})`}
                                        value={value}
                                    />

                                <div className={ `jobs__search--dropdown${select ? ' visible':""}`}>               
                                    {targetType.length && value.length?
                                        targetType[0].career.filter(ele => ele.toLowerCase().includes(value.toLowerCase() )).map((job) => {
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

                                {/* Job search:location */}
                                <div className='jobs__search-box--location' onClick={onInputClick}>
                                <input
                                        className='jobs__search-input--location'
                                        onChange={onLocationChange}
                                        placeholder="Country"
                                        value={locationValue}
                                    />
                                <div className={ `jobs__search--dropdown-location${open ? ' visible':""}`}>
                                    {
                                    locations.filter((item) => {
                                        const searchTerm = locationValue.toLowerCase();
                                        const location = item.location.toLowerCase();
                                        if (!searchTerm) return true;
                                        return location.startsWith(searchTerm);
                                      })
                                    .map( opt => {
                                        return <div key={opt.code} onClick={() => onOptionSelected(opt)} className="jobs__search--row">
                                            {opt.location}
                                            </div>
                                        })
                                    }
                                       

                                </div>
                                </div>
                                <button onClick={() => onSearch(value)} className="jobs__search--btn"> Search </button>  
                            </div>   

                          <div className='jobs__ticket-list'>
                            {
                                isLoaded ? 
                                currentJobData.map((job) => 
                                    <JobTicket
                                        key={job.id}
                                        job = {job}
                                        setJobCart = {setJobCart}
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