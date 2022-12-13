import './SingleType.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import JobTicket from '../../components/JobTicket/JobTicket';
import axios from 'axios';
import testimg from '../../Assetes/image/test.svg'




function SingleType(){
    const singleType = useParams().id;
    const [defaultJob, setDefaultJob] = useState("")
    const [currentJobData, setCurrentJobData] = useState([])
    const [targetType, setTargetType] = useState([])
    // console.log(targetType)
    // console.log(defaultJob)
    console.log(currentJobData)
    
    const getJobs = (career) => {
        axios.post(`http://localhost:8080/jobs/search`, 
        {
            career: career
        }
        ).then((response) => {
            setCurrentJobData(response.data.jobs)
        }).catch((error) => {
            console.log(error)
        })
    }

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
    return( 

        <>
        {targetType.length?
        <>
        <div className='type__container'>
            <Header/>
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
                            <div className='jobs__search-box'>
                            <input
                                type="search"
                                placeholder="Search here"
                                value={defaultJob}/>
                            </div>
                          <div className='jobs__ticket-list'>
                            {currentJobData.map( job => {
                                <JobTicket
                                 key={job.id}
                                 job = {job}/>
                            })}
                            
                            
                            </div>  

                        </div>
                </div> 
            </div> </>:
            <div className='loading'><h1>Loading...</h1></div>}
        </>       
     
    )
}

export default SingleType;