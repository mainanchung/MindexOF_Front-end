import './ResultPage.scss'
import ResultCard from '../../components/Result/ResultCard';
import loadingIcon from '../../Assetes/icon/Loading.svg'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ResultPage(){
    const userType = useParams().type;
    const[typeData, setTypeData] = useState([])

    console.log(userType)
    console.log(typeData)
    useEffect(() => {
        axios.get(`http://localhost:8080/types/${userType}`).then((response) => {
                console.log(response.data)
                setTypeData(response.data)
               }).catch((error)=>{
            console.log(error)
        })
    },[])

    return(  
        <>
        {typeData.length? 
        <div className='result__body'>
            <ResultCard
            typeData={typeData}
             userType = {userType}/>
        </div>:
        <div className='loading'><img src={loadingIcon} alt="loading"/></div>}
        </>
    )
}

export default ResultPage;
