import './SingleType.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideBar from '../../components/sideBar/SideBar';
import Header from '../../components/Header/Header';
import axios from 'axios';
import testimg from '../../Assetes/image/test.svg'




function SingleType(){
const singleType = useParams().id;
   const [allTypes, setAlltypes] = useState([])
console.log(singleType)
   useEffect(() => {
    axios.get(`http://localhost:8080/types/${singleType}`).then((response) => {
            setAlltypes(response.data)
           }).catch((error)=>{
        console.log(error)
    })
},[])
    return( 

        <div className='type__container'>
            <Header/>
              <div className='type'>
                        <div className='type__box'>
                            <div className='type__image-box'>
                                <img className='type__image' src={testimg} alt="type" />
                            </div>
                                <div className='type__content'>
                                    <div className='type__type-name'>
                                        <h1  className='type__title'>THE NAME</h1>
                                        <h3 className='type__subtitle'>TYPE</h3>
                                    </div>
                                    <div className='type__text'>    
                                            <p className='type__intro'>description</p>
                                        <div className='type__traits'>
                                            <h4 className='type__box-title'>You are...</h4>
                                            <div className='type__traits-list'>
                                            {/* {typeData[0].trait.map(ele =>
                                            <p className='type__trait'>{ele}</p>
                                            )} */}
                                            <p className='type__trait'>trait</p>
                                            <p className='type__trait'>trait</p>
                                            <p className='type__trait'>trait</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                        </div> 
                </div> 
            </div>     
     
    )
}

export default SingleType;