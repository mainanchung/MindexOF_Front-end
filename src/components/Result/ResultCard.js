import './ResultCard.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ResultCard(){
    
    return(    
          <div className='type-card'>
                <div className='type-card__box'>
                    <img className='type-card__image' src='' alt='' />

                        <div className='type-card__content'>
                            <div className='type-card__type'>
                                <h1  className='type-card__title'>THE ADVOCATE</h1>
                                <h3 className='type-card__subtitle'>INFJ</h3>
                            </div>
                            <div className='type-card__text'>    
                                    <p className='type-card__intro'>INFJs are usually idealists who have a profound way of looking at the world. They usually don’t take things at the surface level or accept things as they are. 
                                They are often overflowing with ideas and creative imagination. 
                                When it comes to careers, they appreciate peaceful work environments and are deep thinkers who appreciate challenges at work. 
                                They are empathetic and caring, helpful and insightful.</p>

                                <div className='type-card__traits'>
                                    <h4 className='type-card__box-title'>You are...</h4>
                                    {/* maping the traits gotten from single type in database */}
                                    <p className='type-card__trait'>Compassionate</p>
                                    <p className='type-card__trait'>Compassionate</p>
                                    <p className='type-card__trait'>Compassionate</p>
                                    <p className='type-card__trait'>Compassionate</p>
                                </div>

                                <div className='type-card__career'>
                                    <h4 className='type-card__box-title'>You can be a great:</h4>
                                    {/* maping the jobs gotten from single type in database */}
                                    <p className='type-card__trait'>Dentist</p>
                                    <p className='type-card__trait'>Dentist</p>
                                    <p className='type-card__trait'>Dentist</p>
                                    <p className='type-card__trait'>Dentist</p>
                                </div>

                            </div>
                        </div>
                        {/* the INFJ should be replaced by props from result page */}
         
                        <NavLink to={"/types/INFJ/career"}><button className='type-card__btn'>Find the jobs for Youself !</button></NavLink>
                </div>
            </div>
    )
}

export default ResultCard;
