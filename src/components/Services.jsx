import React from 'react'
import { SERVICES } from '../utils/services'
import { Link } from 'react-router-dom'

export default function Services() {
    return (
        <div className='layout'>
            <div className="comp-title">
                <div className="comp-title-blok">
                    <p className='shrift'>SERVICES</p>
                    <h1>Only Quality Coffee Beans</h1>
                </div>
            </div>
            <div className="services">
                <div className="services-blok">
                    {SERVICES.map(item => (
                        <div className="services-blok__section">
                            <Link className='services-blok__section__link' to='/menu'><img src={item.image} alt={item.title} /></Link>
                            <p className='services-blok__section__p1'>{item.title}</p>
                            <p className='services-blok__section__p2'>{item.subtitle}</p>
                            <Link to='/menu'><button>Read More <span className='button-span'></span></button></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};