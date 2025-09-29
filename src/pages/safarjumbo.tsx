import React from "react"
import Navbar from "../pages/components/navbar"
import Footer from "../pages/components/footer"
import SafarJumboSlider from "../pages/components/safarjumboslider"
import SafarJumboImage from "../pages/components/safarjumboimage"



const BgaussPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <SafarJumboSlider />
        <SafarJumboImage />
      </main>
      <Footer />
    </>
  )
}

export default BgaussPage
