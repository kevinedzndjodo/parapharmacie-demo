import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Catalogue from "./pages/Catalogue"
import ProductDetail from "./pages/ProductDetail"
import About from "./pages/About"
import Vision from "./pages/Vision"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/produit/:id" element={<ProductDetail />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}