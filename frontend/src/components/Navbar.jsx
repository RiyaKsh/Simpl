import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ backgroundImage: "url('./assets/skincare.jpeg')" }}>
      <nav className="fixed top-0 left-0 w-full shadow-md flex justify-between items-center px-10 py-2 z-50 border-b-3 bg-white ">
      <Link to="/" className="text-2xl font-bold text-black">
        Simpl
      </Link>
      <div className="flex space-x-6">
    <Link to="/" className="text-[16px] py-0.5 font-medium text-black hover:bg-[#C0C1D3] cursor-pointer px-2 rounded-md">
      Home
    </Link>
    <Link to="/about" className="text-[16px] font-medium text-black hover:bg-[#C0C1D3] cursor-pointer px-2 py-0.5 rounded-md">
      About
    </Link>
    <Link to="/products" className="text-[16px] font-medium text-black hover:bg-[#C0C1D3] cursor-pointer py-0.5 px-2 rounded-md">
      Products
    </Link>
    <Link to="/contact" className="text-[16px] font-medium text-black hover:bg-[#C0C1D3] cursor-pointer px-2 py-0.5 rounded-md">
      Contact
    </Link>
    
  </div>
  
    </nav>

    </div>
  )
}

export default Navbar
