import './JobTicket.scss'
import likeIcon from '../../Assetes/icon/like.svg'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function JobTicket({key,job}){
    console.log(job.salary_min)
   
    return( 
     
        <div className='job-ticket'>
            <div className='job-ticket__container'>
             {/* <div className='job-ticket__color'></div> */}
                <div className='job-ticket__content'>
                    <p className='job-ticket__company'>{job.company.display_name}</p>
                        <h3 className='job-ticket__title'>{job.title}</h3>
                        {job.salary_min? <p className='job-ticket__salary'>{job.salary_min} / year</p> : ""}
                        <p className='job-ticket__location'>{job.location.area[1]}, {job.location.area[0]}</p>
                    <div className='job-ticket__tags'>
                        <p className='job-ticket__tag'>{job.contract_time}</p>
                        <p className='job-ticket__tag'>{job.category.label}</p>
                    </div>
                </div>  
                <div className='job-ticket__function'>
                    <img className='job-ticket__icon'src={likeIcon} alt='like-icon'/>
                    <a className="job-ticket__url" href={job.redirect_url}> <button className='job-ticket__btn'>Apply</button></a>
                </div>         
            </div>
        </div> 
    )
}

export default JobTicket;