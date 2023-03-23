import './JobTicket.scss'
import likeIcon from '../../Assetes/icon/like.svg'
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const getJobCartFromLocalStorage = JSON.parse(localStorage.getItem("cart")|| "[]")

function JobTicket({job, setJobCart, jobCart}){
    const [liked, setLiked] = useState(false)
    useEffect(() => {Aos.init({duration:800});},[])

    const  SalaryFormatter= (num) =>{
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }

    const addToCart = (selectedJob) =>{
        let duplicatedJob = jobCart.find(ele => ele?.id == selectedJob.id)
           if(!duplicatedJob){
            setJobCart([...jobCart, selectedJob])
            setLiked(true)
           }
    }
    useEffect(() => {
        let savedJob = jobCart.find(ele => ele?.id === job?.id)
        if (savedJob) {
            setLiked(true)
        } else {
            setLiked(false)
        }
      }, []);

    return( 
     
        <div data-aos="fade-up" className='job-ticket'>
            <div className='job-ticket__container'>
             {/* <div className='job-ticket__color'></div> */}
                <div className='job-ticket__content'>
                    <p className='job-ticket__company'>{job.company.display_name}</p>
                        <h3 className='job-ticket__title'>{job.title}</h3>
                        {job.salary_min? <p className='job-ticket__salary'>{SalaryFormatter(job.salary_min)} / year</p> : ""}
                        <p className='job-ticket__location'>{job.location.area[1]}  {job.location.area[0]}</p>
                </div>  
                <div className='job-ticket__function'>
                    <img onClick={()=> addToCart(job)} className={`job-ticket__icon ${liked? "liked":""}`}src={likeIcon} alt='like-icon'/>
                    <a className="job-ticket__url" href={job.redirect_url}> <button className='job-ticket__btn'>Apply</button></a>
                </div>         
            </div>
        </div> 
    )
}

export default JobTicket;