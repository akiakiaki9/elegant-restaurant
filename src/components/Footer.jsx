import React from 'react'
import { Link } from 'react-router-dom'
import { NAME_RESTAURANT } from '../utils/logo'
import { FaInstagram, FaTelegram } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-blok-1">
                <div className="footer-blok-1__section-1">
                    <Link to='/'><img src="/images/logo.png" alt={`${NAME_RESTAURANT} Logo`} /></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget rhoncus consectetur enim.</p>
                    <div className="footer-blok-1__section-1__container">
                        <a href=""><FaInstagram className='footer-blok-1__section-1__container__icon' /></a>
                        <a href=""><FaTelegram className='footer-blok-1__section-1__container__icon' /></a>
                    </div>
                </div>
                <div className="footer-blok-1__section-2">
                    <p className='footer-blok-1__p'>Use Full Link</p>
                    <div className="footer-blok-1__section-2__part">
                        <div></div>
                        <a href="#team">Team Signal</a>
                    </div>
                    <div className="footer-blok-1__section-2__part">
                        <div></div>
                        <a href="#booking">Booking Table</a>
                    </div>
                    <div className="footer-blok-1__section-2__part">
                        <div></div>
                        <Link to="/menu">Our Menu</Link>
                    </div>
                    <div className="footer-blok-1__section-2__part">
                        <div></div>
                        <a href="#aboutus">About Us</a>
                    </div>
                </div>
                <div className="footer-blok-1__section-3">
                    <p className='footer-blok-1__p'>Contact Us</p>
                    <div className="footer-blok-1__section-3__part">
                        <BsFillTelephoneFill className="footer-blok-1__section-3__part__icon" />
                        <a href="tel:+998919119191">+99891-911-91-91</a>
                    </div>
                    <div className="footer-blok-1__section-3__part">
                        <MdEmail className="footer-blok-1__section-3__part__icon" />
                        <a href="mailto:peacefulqode@gmail.com">peacefulqode@gmail.com</a>
                    </div>
                    <div className="footer-blok-1__section-3__part">
                        <FaLocationDot className="footer-blok-1__section-3__part__icon" />
                        <p>Themeforest, Envato HQ 24 Fifth</p>
                    </div>
                </div>
                <div className="footer-blok-1__section-4">
                    <p className='footer-blok-1__p'>Opening Hours</p>
                    <div className="footer-blok-1__section-4__container">
                        <div className="footer-blok-1__section-4__container__part footer-blok-1__section-4__container__part-1">
                            <p>Mon - Tue</p>
                            <p>09.00 am - 10.00 pm</p>
                        </div>
                        <div className="footer-blok-1__section-4__container__part footer-blok-1__section-4__container__part-2">
                            <p>Wed - Thu</p>
                            <p>10.00am - 11.00pm</p>
                        </div>
                        <div className="footer-blok-1__section-4__container__part footer-blok-1__section-4__container__part-3">
                            <p>Sat</p>
                            <p>07.00am - 08.00pm</p>
                        </div>
                        <div className="footer-blok-1__section-4__container__part footer-blok-1__section-4__container__part-4">
                            <p>Sun</p>
                            <p>9:00 am - 8 Pm</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-blok-2">
                <div className="footer-blok-2__section">
                    <TfiEmail className='footer-blok-2__section__icon' />
                    <p>Subscribe Our Newsletter</p>
                </div>
                <div className="footer-blok-2__section">
                    <form>
                        <input type="text" placeholder='Your Email Address' required />
                        <button type='submit'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-blok-3">
                <p>Copyright 2022 {NAME_RESTAURANT} All Rights Reserved.</p>
            </div>
        </div>
    )
};