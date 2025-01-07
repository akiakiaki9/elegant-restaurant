import React from 'react'
import Title from './Title'
import Navbar from '../components/Navbar'
import Deserts from './Deserts'
import MenuBege from './MenuBg'
import MenuBege2 from './MenuBg2'
import Main from './Main'
import News from '../components/News'
import Footer from '../components/Footer'

export default function TeamPage() {
    return (
        <div>
            <Navbar />
            <Title />
            <Deserts />
            <MenuBege />
            <Main />
            <MenuBege2 />
            <News />
            <Footer />
        </div>
    )
};