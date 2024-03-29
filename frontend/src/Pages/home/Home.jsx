import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import FooterList from '../../components/footer/FooterList'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import './Home.css'

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
      <Featured/>
      <h1 className="homeTitle">Browse by property type?</h1>
      <PropertyList/>
      <h1 className="fpTitle">Homes guests love</h1>
      <FeaturedProperties/>
      <MailList/>
      <FooterList/>
      </div>
    </div>
  )
}

export default Home
