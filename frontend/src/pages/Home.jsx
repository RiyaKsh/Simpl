import bgImage from "../assets/skincare.jpeg";

const Home = () => {
  const products = [
    { name: "Cleanser", image: "/assets/cleanser.png" },
    { name: "Toner", image: "/assets/toner.png" },
    { name: "Serum", image: "/assets/serum.png" },
    { name: "Moisturizer", image: "/assets/moisturizer.png" },
    { name: "Sunscreen", image: "/assets/sunscreen.png" },
  ];
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }}>
      
    
<section className="relative w-full bg-white pt-55 pb-55 flex flex-col items-center text-center px-6  mt-12 selection:bg-[#C0C1D3] border-b-3 ">
      {/* Main Text */}
      <h1 className="text-2xl md:text-28 font-bold text-gray-900 max-w-3xl ">
        Skincare Made Simpl.Self-Love, Made Simple.
      </h1>
      
      {/* Subheading */}
      <p className="text-md md:text-20 text-gray-700 max-w-4xl mt-4 font-medium">
        Effortless routines, clean ingredients, and real results—because self-care should never be complicated.
      </p>
      
      {/* Call to Action */}
      <button className="mt-6 bg-[#C0C1D3] text-black text-24 font-semibold px-6 py-2 rounded-md hover:bg-[#aaaeca] transition border-2">
        Shop Now
      </button>
      {/* <svg viewBox="0 0 1440 320" className="max-sm:top-100 absolute bottom-0 top-50 left-0 w-full h-auto">
  <path d="M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,181.3C840,181,960,203,1080,192C1200,181,1320,139,1380,117.3L1440,96" 
    stroke="#C0C1D3" strokeWidth="3" fill="none" />
      </svg> */}
      
      
    </section>
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-8">
          Simplify Your Routine with Our Essentials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
    

    </div>
    
  )
}

export default Home
