import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaInstagram, FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar-blok">
                <div className="navbar-blok__section">
                    <Link to='/'><img src="/images/logo.png" alt="Millenium Restaurant Logo" /></Link>
                </div>
                <div className="navbar-blok__section">
                    <a href="#booking"><button className='navbar-blok__section__button'>Book A Table <span></span></button></a>
                </div>
            </div>
            <div className="navbar-footer">
                <div className="navbar-footer__section navbar-footer__section-1">
                    <FaLocationDot className='navbar-footer__section__icon-1' />
                    <p>Themeforest, Envato HQ 24 Fifth</p>
                </div>
                <div className="navbar-footer__section navbar-footer__section-2">
                    <MdEmail className='navbar-footer__section__icon-1' />
                    <p>peacefulqode@gmail.com</p>
                </div>
                <div className="navbar-footer__section navbar-footer__section-3">
                    <BsFillTelephoneFill className='navbar-footer__section__icon-1' />
                    <a href="tel:+998919119191">+99891-911-91-91</a>
                </div>
                <div className="navbar-footer__section navbar-footer__section-4">
                    <p>Social Links</p>
                    <a href=""><FaInstagram className='navbar-footer__section__icon-2' /></a>
                    <a href=""><FaTelegramPlane className='navbar-footer__section__icon-2' /></a>
                </div>
            </div>
        </div>
    )
};