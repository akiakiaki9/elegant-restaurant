import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { NAME_RESTAURANT } from '../utils/logo'
import { Link } from 'react-router-dom'

export default function Know() {
    return (
        <div className='layout'>
            <div className="know">
                <div className="know-blok">
                    <div className="know-blok__section-1">
                        <p className='know-blok__section-1__p1 shrift'>Get To Know</p>
                        <h1>Special Moments Your Life</h1>
                        <p className='know-blok__section-1__p2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled.Lorem Ipsum has been the industry's standard.
                        </p>
                        <div className="know-blok__section-1__part">
                            <FaCheck className='know-blok__section-1__part__icon' />
                            <p>chunks as necessary, making this the first true generator on the Internet.</p>
                        </div>
                        <div className="know-blok__section-1__part">
                            <FaCheck className='know-blok__section-1__part__icon' />
                            <p>There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                        <div className="know-blok__section-1__part">
                            <FaCheck className='know-blok__section-1__part__icon' />
                            <p>chunks as necessary, making this the first true generator.</p>
                        </div>
                        <br />
                        <div className="know-blok__section-1__container">
                            <div className="know-blok__section-1__container__part">
                                <p className='know-blok__section-1__container__part__h1'>140+</p>
                                <p className='know-blok__section-1__container__part__p'>Donations</p>
                            </div>
                            <div className="know-blok__section-1__container__part">
                                <p className='know-blok__section-1__container__part__h1'>120+</p>
                                <p className='know-blok__section-1__container__part__p'>Specialist</p>
                            </div>
                            <div className="know-blok__section-1__container__part">
                                <p className='know-blok__section-1__container__part__h1'>160+</p>
                                <p className='know-blok__section-1__container__part__p'>Delicacies</p>
                            </div>
                        </div>
                        <Link to='/menu'><button>View Our Menu</button></Link>
                    </div>
                    <div className="know-blok__section-2">
                        <div className="know-blok__section-2__container">
                            <div className="know-blok__section-2__container__part">
                                <div className="know-blok__section-2__container__part__header">
                                    <img src="/images/know/know-1.png" alt={NAME_RESTAURANT} />
                                    <h1>01</h1>
                                </div>
                                <h1>Fresh Product</h1>
                                <p className='know-blok__section-2__container__part__p1'>If you are going to use a passage of Lorem Ipsum, you need to be sure Order.</p>
                                <Link to='/menu'><p className='know-blok__section-2__container__part__p2'>Read More</p></Link>
                            </div>
                            <div className="know-blok__section-2__container__part">
                                <div className="know-blok__section-2__container__part__header">
                                    <img src="/images/know/know-2.png" alt={NAME_RESTAURANT} />
                                    <h1>02</h1>
                                </div>
                                <h1>Skilled Chefs</h1>
                                <p className='know-blok__section-2__container__part__p1'>If you are going to use a passage of Lorem Ipsum, you need to be sure Order.</p>
                                <Link to='/menu'><p className='know-blok__section-2__container__part__p2'>Read More</p></Link>
                            </div>
                        </div>
                        <div className="know-blok__section-2__container">
                            <div className="know-blok__section-2__container__part">
                                <div className="know-blok__section-2__container__part__header">
                                    <img src="/images/know/know-3.png" alt={NAME_RESTAURANT} />
                                    <h1>03</h1>
                                </div>
                                <h1>Vegan Cuisine</h1>
                                <p className='know-blok__section-2__container__part__p1'>If you are going to use a passage of Lorem Ipsum, you need to be sure Order.</p>
                                <Link to='/menu'><p className='know-blok__section-2__container__part__p2'>Read More</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};