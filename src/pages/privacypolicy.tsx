import React from "react"
import Navbar from "../pages/components/navbar"
import Footer from "../pages/components/footer"
import PrivacyPolicy from "./components/privacypolicy"



const BgaussPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  )
}

export default BgaussPage
