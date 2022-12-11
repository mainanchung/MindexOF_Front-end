import './ResultPage.scss'
import ResultCard from '../../components/Result/ResultCard';
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';




function ResultPage(){

    return( 
             
        <div className='reault__body'>
            <ResultCard/>
        </div>
    )
}

export default ResultPage;
