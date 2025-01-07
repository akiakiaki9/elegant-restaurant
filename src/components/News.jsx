import React from 'react'
import { NEWSS } from '../utils/news'
import { FaUser } from "react-icons/fa6";
import { FaTag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function News() {
    return (
        <div className="layout">
            <div className="comp-title">
                <div className="comp-title-blok">
                    <p className='shrift'>Our blog</p>
                    <h1>Be First Who Read News</h1>
                </div>
            </div>
            <div className='news'>
                <div className="news-blok">
                    {NEWSS.map(item => (
                        <div className="news-blok__section">
                            <div className='news-blok__section__image'><Link to='/'><img src={item.image} alt={item.title} /></Link></div>
                            <div className="news-blok__section__container">
                                <div className="news-blok__section__header">
                                    <div className="news-blok__section__header__part">
                                        <FaUser className='news-blok__section__header__part__icon' />
                                        <p>Admin</p>
                                    </div>
                                    <div className="news-blok__section__header__part">
                                        <FaTag className='news-blok__section__header__part__icon' />
                                        <p>Food</p>
                                    </div>
                                </div>
                                <Link to='/menu'><h1>{item.title}</h1></Link>
                                <p>{item.subtitle}</p>
                                <br />
                                <hr />
                                <br />
                                <Link to='/menu'><button>Read More</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};