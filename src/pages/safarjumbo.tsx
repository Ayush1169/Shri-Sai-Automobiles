import React from "react"
import Navbar from "../pages/components/navbar"
import Footer from "../pages/components/footer"
import SafarJumboSlider from "../pages/components/safarjumboslider"
import SafarJumboImage from "../pages/components/safarjumboimage"
import SafarJumboVideo from "../pages/components/safarjumbovideo"



const BgaussPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <SafarJumboVideo />
        <SafarJumboSlider />
        <SafarJumboImage />
      </main>
      <Footer />
    </>
  )
}

export default BgaussPage
