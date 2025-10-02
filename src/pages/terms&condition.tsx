import React from "react"
import Navbar from "../pages/components/navbar"
import Footer from "../pages/components/footer"
import TermsAndConditions from "./components/termsandcondition"



const BgaussPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <TermsAndConditions/>
      </main>
      <Footer />
    </>
  )
}

export default BgaussPage
