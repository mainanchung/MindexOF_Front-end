import './JobTicket.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function JobTicket({job}){
    console.log(job)
   
    return( 
     
        <div className='job-ticket'>
            <div className='job-ticket__container'>
             {/* <div className='job-ticket__color'></div> */}
                <div className='job-ticket__content'>
                    <p className='job-ticket__company'>{job.company.display_name}</p>
                        <h2 className='job-ticket__title'>{job.company.title}</h2>
                        <p className='job-ticket__salary'></p>
                        <p className='job-ticket__salary'>{job.location.area[0]}</p>
                    <div className='job-ticket__tags'>
                    <p className='job-ticket__tag'>{job}</p>
                    <p classname='job-ticket__tag'>category.label</p>
                    </div>
                 <div className='job-ticket__function'>
                    <img className='job-ticket__icon'src='' alt='like-icon'/>
                    <NavLink className="job-ticket__link" to="edirect_url"> <button className='job-ticket__btn'>Apply</button></NavLink>
                </div>   
                </div>          
            </div>
        </div> 
    )
}

export default JobTicket;