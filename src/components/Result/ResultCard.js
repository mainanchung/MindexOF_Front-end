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
        {typeData?
        <>
            <div className='type-card'>
                <div className='type-card__box'>
                    <img className='type-card__image' src={testimg} alt="type" />

                        <div className='type-card__content'>
                            <div className='type-card__type'>
                                {/* <h1  className='type-card__title'>THE {typeData[0].type_name}</h1>
                                <h3 className='type-card__subtitle'>{typeData[0].type}</h3> */}
                                <h1  className='type-card__title'>THE CHAMPION</h1>
                                <h3 className='type-card__subtitle'>ENFP</h3>
                            </div>
                            <div className='type-card__text'>    
                                    {/* <p className='type-card__intro'>{typeData[0].description}</p> */}
                                    <p className='type-card__intro'>The ENFP type is generally innovative, inspiring and unafraid of taking risks. ENFPs comprise approximately 8% of the general population and include more women than men. They are highly perceptive when understanding how individuals and groups function, making them natural leaders. ENFPs want excitement, enjoy abstract and experiential learning and look for maximum potential in their career experiences and others.</p>

                                <div className='type-card__traits'>
                                    <h4 className='type-card__box-title'>You are...</h4>
                                    {/* {typeData[0].trait.map(ele =>
                                    <p className='type-card__trait'>{ele}</p>
                                    )} */}
                                    <p className='type-card__trait'>Compassionate</p>
                                </div>

                                <div className='type-card__career'>
                                    <h4 className='type-card__box-title'>You can be a great:</h4>
                                    {/* {typeData[0].career.map(ele =>
                                    <p className='type-card__job'>{ele}</p>
                                    )} */}
                                    <p className='type-card__job'>Inspector</p>
                                </div>

                            </div>
                        </div> 
         
                        <NavLink to="" className='type-card__btn-link'><button className='type-card__btn'>Find out more !</button></NavLink>
                </div>
            </div></> : ""}
        </>        
    )
}

export default ResultCard;
