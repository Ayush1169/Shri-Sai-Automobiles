import React from "react"
import Navbar from "../pages/components/navbar"
import Footer from "../pages/components/footer"
import SafarSlider from "../pages/components/safarsmatslider"
import SafarImage from "../pages/components/safarsmartimage"


const BgaussPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <SafarSlider />      
        <SafarImage />  
      </main>
      <Footer />
    </>
  )
}

export default BgaussPage
