import React from "react"
import Navbar from "../pages/components/navbar"
import Footer from "../pages/components/footer"
import SafarSlider from "../pages/components/safarsmatslider"
import SafarImage from "../pages/components/safarsmartimage"
import SafarVideo from "../pages/components/safarsmartvideo"


const BgaussPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <SafarVideo />
        <SafarSlider />      
        <SafarImage />  
      </main>
      <Footer />
    </>
  )
}

export default BgaussPage
