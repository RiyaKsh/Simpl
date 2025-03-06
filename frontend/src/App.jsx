import {BrowserRouter as Router, Routes,Route,Navigate } from 'react-router-dom';
import './App.css'
import {Toaster} from "react-hot-toast"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
function App() {
  

  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster/>
      </Router>
    </div>
    
  )
}

export default App
