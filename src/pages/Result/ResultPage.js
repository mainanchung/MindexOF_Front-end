import './ResultPage.scss'
import ResultCard from '../../components/Result/ResultCard';
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ResultPage(){
    const userType = useParams().type;
    const[typeData, setTypeData] = useState([])
    console.log(userType)
    console.log(typeData)
    useEffect(() => {
        let mounted = true;
        if(mounted){
        axios.get(`http://localhost:8080/types/${userType}`).then((response) => {
                console.log(response.data)
                setTypeData(response.data)
               }).catch((error)=>{
            console.log(error)
        })}else{
            return () => {
                mounted = false;
              }
        }
    },[])

    return(  
        <>{typeData? 
        <> 
        <div className='result__body'>
            <ResultCard
            typeData={typeData}
             userType = {userType}/>
        </div></>:"Loading..."} </>
    )
}

export default ResultPage;
