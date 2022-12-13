import './ResultCard.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import testimg from '../../Assetes/image/ESFP.svg'
import { useEffect, useState } from 'react';
import axios from 'axios';

function ResultCard({userType, typeData}){
    console.log(userType)
    console.log(typeData)

    return(   
        <>
        {typeData.length?
        <>
            <div className='type-card'>
                <div className='type-card__box'>
                    <div className='type-card__image-box'>
                        <img className='type-card__image' src={typeData[0].image} alt="type" />
                    </div>

                        <div className='type-card__content'>
                            <div className='type-card__type'>
                                <h1  className='type-card__title'>THE <br/>{typeData[0].type_name}</h1>
                                <h3 className='type-card__subtitle'>{typeData[0].type}</h3>
            
                            </div>
                            <div className='type-card__text'>    
                                    <p className='type-card__intro'>{typeData[0].description}</p>

                                <div className='type-card__traits'>
                                    <h4 className='type-card__box-title'>You are...</h4>
                                    <div className='type-card__traits-list'>
                                    {typeData[0].trait.map(ele =>
                                    <p className='type-card__trait'>{ele}</p>
                                    )}
                                    </div>

                                </div>

                                <div className='type-card__career'>
                                    <h4 className='type-card__box-title'>You can be a great:</h4>
                                    <div className='type-card__jobs-list'>
                                    {typeData[0].career.map(ele =>
                                    <p className='type-card__job'>{ele}</p>
                                    )}
                                    </div>
                                </div>

                            </div>
                            <NavLink to={"/types/"+ userType } className='type-card__btn-link'><button className='type-card__btn'>Find out more !</button></NavLink>
                        </div> 
         
                        
                </div>
            </div></> : ""}
        </>        
    )
}

export default ResultCard;
