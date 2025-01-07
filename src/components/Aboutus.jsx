import React from 'react'
import { NAME_RESTAURANT } from '../utils/logo'
import { Link } from 'react-router-dom'

export default function Aboutus() {
    return (
        <div className="layout2" id='aboutus'>
            <div className='aboutus'>
                <div className="aboutus-blok">
                    <div className="aboutus-blok__section aboutus-blok__section-1">
                        <img src="/images/aboutus.png" alt={`${NAME_RESTAURANT} About Us`} />
                    </div>
                    <div className="aboutus-blok__section aboutus-blok__section-2">
                        <p className='aboutus-blok__section__p1 shrift'>About Us</p>
                        <h1>Discover Lorem From flavors within wines.</h1>
                        <p className='aboutus-blok__section__p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <br />
                        <p className='aboutus-blok__section__p2'>At vero eos et accusamus, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form luctus nec ullamcorper mattis, pulvinar .</p>
                        <br />
                        <Link to="/menu"><button>Read More <span className='button-span'></span></button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};