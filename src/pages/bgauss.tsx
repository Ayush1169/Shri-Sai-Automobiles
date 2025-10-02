import React from "react"
import Navbar from "../pages/components/navbar"
import Footer from "../pages/components/footer"
import BgaussSlider from "../pages/components/bgaussslider"
import Bgauss2 from "../pages/components/bgauss2"
import BgaussVideo from "../pages/components/bgaussvideo"

const BgaussPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <BgaussVideo />
        <BgaussSlider />
        <Bgauss2 />
      </main>
      <Footer />
    </>
  )
}

export default BgaussPage
