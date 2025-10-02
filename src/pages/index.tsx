import Navbar from "../pages/components/navbar"
import Header from "./components/header"
import Image from "../pages/components/image"
import Contact from "../pages/components/contact"
import Faq from "../pages/components/faqsection"
import Testinomials from "../pages/components/testinomials" 
import TiedUp from "../pages/components/tiedup"  
import Footer from "../pages/components/footer"
import AboutUs from "./components/aboutus"

export default function Home() {
  return (
    <>
      <Navbar />
       <main>
        <Header />
       <Image />
       <Contact />  
      <Testinomials />
      <TiedUp />
      <AboutUs />
       <Faq />
      </main>
      <Footer />
    </>
  )
}
