import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-[#050524] text-[#c0c0c0] min-h-[40vh] flex items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-left">
            Expert Legal Solutions <br />
            <span className="text-white">Tailored to Your Needs</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#c0c0c0] ml-5 mb-8 max-w-2xl text-left">
            At Rabbah Legal, we combine decades of experience with personalized 
            attention to deliver exceptional results for our clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Link 
              to="/contact" 
              className="border-2 border-silver text-[#c0c0c0] px-8 py-3 rounded-md font-medium hover:bg-silver/10 transition duration-300 text-center"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-silver text-[#c0c0c0] px-8 py-3 rounded-md font-medium hover:bg-silver/10 transition duration-300 text-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;