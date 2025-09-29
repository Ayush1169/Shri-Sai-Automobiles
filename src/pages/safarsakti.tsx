import React from "react"
import Navbar from "../pages/components/navbar"
import Footer from "../pages/components/footer"
import SafarSaktiSlider from "../pages/components/safarsaktislider"
import SafarSaktiImage from "../pages/components/safarsaktiimage"



const BgaussPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <SafarSaktiSlider /> 
        <SafarSaktiImage />
      </main>
      <Footer />
    </>
  )
}

export default BgaussPage
