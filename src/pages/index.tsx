import Navbar from "../pages/components/navbar"
import Header from "./components/header"
import Image from "../pages/components/image"
import Contact from "../pages/components/contact"
import Faq from "../pages/components/faqsection"
import Footer from "../pages/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
       <main>
        <Header />
       <Image />
       <Contact />  
       <Faq />
      </main>
      <Footer />
    </>
  )
}
