import React from "react"
import Navbar from "../pages/components/navbar"
import Footer from "../pages/components/footer"
import SafarSaktiSlider from "../pages/components/safarsaktislider"
import SafarSaktiImage from "../pages/components/safarsaktiimage"
import SafarSaktiVideo from "../pages/components/safarsaktivideo"



const BgaussPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <SafarSaktiVideo />
        <SafarSaktiSlider /> 
        <SafarSaktiImage />
      </main>
      <Footer />
    </>
  )
}

export default BgaussPage
