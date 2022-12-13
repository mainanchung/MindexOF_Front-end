import './Types.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideBar from '../../components/sideBar/SideBar';
import Header from '../../components/Header/Header';
import axios from 'axios';




function Types(){
   const [allTypes, setAlltypes] = useState([])
   console.log(allTypes)

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
            <Header/>
                <div className='types__cards'>
                    {allTypes.map(ele =>
                    <NavLink to={`/types/${ele.type}`}  className="types__cards--link">
                    <div className='types__cards--single' style={divBg(ele.image)}>
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