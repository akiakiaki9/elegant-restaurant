import React from 'react'
import { DESERTS_1, DESERTS_2 } from '../utils/deserts'
import { NAME_RESTAURANT } from '../utils/logo'

export default function Deserts() {
    return (
        <div className='layout'>
            <div className="comp-title">
                <div className="comp-title-blok">
                    <p className='shrift'>Sweet Dreams</p>
                    <h1>Desserts</h1>
                </div>
            </div>
            <div className="deserts">
                <div className="deserts-blok">
                    <div className="deserts-blok__section">
                        {DESERTS_1.map(item => (
                            <div className='deserts-blok__section__container'>
                                <img src={item.image} alt={`${NAME_RESTAURANT}`} />
                                <p className='deserts-blok__section__p1'>{item.title}</p>
                                <div></div>
                                <p className='deserts-blok__section__p2'>${item.price}</p>
                            </div>
                        ))}
                    </div>
                    <div className="deserts-blok__section">
                        {DESERTS_2.map(item => (
                            <div className='deserts-blok__section__container'>
                                <img src={item.image} alt={`${NAME_RESTAURANT}`} />
                                <p className='deserts-blok__section__p1'>{item.title}</p>
                                <div></div>
                                <p className='deserts-blok__section__p2'>${item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};