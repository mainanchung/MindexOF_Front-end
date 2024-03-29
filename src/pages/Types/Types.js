import './Types.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';




function Types({jobCart}){
   const [allTypes, setAlltypes] = useState([])
   useEffect(() => {Aos.init({duration:1000});},[])
   useEffect(() => {
    axios.get(`http://localhost:8080/types`).then((response) => {
            setAlltypes(response.data)
           }).catch((error)=>{
        console.log(error)
    })
},[])
const divBg = (imgSrc) => ({
    backgroundImage: `url(${imgSrc})`
  })
   
    return( 
        <> 
        <div className='types__container'>
            <Header
            jobCart={jobCart}/>
                <div className='types__cards'>
                    {allTypes.map(ele =>
                    <NavLink to={`/types/${ele.type}`}  className="types__cards--link">
                    <div data-aos="fade-up" className='types__cards--single' style={divBg(ele.image)}>
                        <h3 className='types__card--name'>THE<br/> {ele.type_name}</h3>
                        <p className='types__card--type'>{ele.type}</p>
                    </div>
                    </NavLink>
                    )}
                </div>
        </div>  

        </> 


    )
}

export default Types;