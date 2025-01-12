import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Popular from './components/Popular'
import OneProduct from './components/OneProduct'
import FeatureCard from './components/FeatureCard'
import Customer from './components/Customer'
import SpecialProducts from './components/SpecialProducts'
import SingUp from './components/SingUp'
import Footer from './components/Footer'

const App = () => {
 return (
    <>
        <Navbar />
        <Main />
        <Popular />
        <OneProduct />
        <FeatureCard />
        <SpecialProducts/>
        <Customer />
        <SingUp />
        <Footer/>
    </>
    
) 
}

export default App