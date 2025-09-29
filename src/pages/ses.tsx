import React from "react"
import Navbar from "../pages/components/navbar"
import Footer from "../pages/components/footer"
import SesVideo from "../pages/components/sesvideo"
import SesSlider from "../pages/components/sesslider"


const BgaussPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <SesVideo />
        <SesSlider />
      </main>
      <Footer />
    </>
  )
}

export default BgaussPage
