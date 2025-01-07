import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Services from './components/Services'
import Aboutus from './components/Aboutus'
import Booking from './components/Booking'
import Statistycs from './components/Statistycs'
import News from './components/News'
import Know from './components/Know'
import CarouselComp from './components/Carousel'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Services />
            <Aboutus />
            <Know />
            <CarouselComp />
            <News />
            <Statistycs />
            <Booking />
            <Footer />
        </div>
    )
};