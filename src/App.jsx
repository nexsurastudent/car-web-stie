import { BrowserRouter, Routes, Route } from "react-router-dom"

// ======= Import Pages ============== 
import Cars from "./pages/Cars/cars"
import Car_Details from "./pages/Cars/Car_Details"
import Terms from "./pages/terms/terms"
import Serach from "./pages/search/serach"
import Privacy from "./pages/privacy/privacy"
import Home from "./pages/home/home"
import Favorites from "./pages/Favorites/favorites"
import Faq from "./pages/faq/faq"
import Contact from "./pages/contact/contact"
import About from "./pages/about/about"
import Compare from "./pages/compare/compare"
import Appointment from "./pages/appointment/appointment"
import Buying_guide from "./pages/buying-guide/buying-guide"

import Header from "./components/header"
import Footer from "./components/footer"

const App = () => {
  
  return (
    <main>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/car-details" element={<Car_Details />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/search" element={<Serach />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/buying_guide" element={<Buying_guide />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </main>
  )
}
export default App
