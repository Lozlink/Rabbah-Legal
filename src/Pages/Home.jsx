import { Link } from 'react-router-dom';
import AnimatedPage from '../Components/AnimatedPage';
import why from  '../assets/why.jpg'
const Home = () => {
  return (
    <AnimatedPage>
      <div className="bg-[#050524]  text-[#c0c0c0]">
        {/* 1. Practice Areas Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="text-center mb-16 ">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-#">Our Practice Areas</h2>
            <div className="w-24 h-1 bg-[#050524] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Criminal Defense",
                icon: "⚖️",
                desc: "Aggressive representation for all criminal charges."
              },
              {
                title: "Corporate Law",
                icon: "🏢",
                desc: "Strategic counsel for business entities."
              },
              {
                title: "Family Law",
                icon: "👨‍👩‍👧‍👦", 
                desc: "Compassionate guidance for family matters."
              }
            ].map((area, index) => (
              <div key={index} className="bg-[#c0c0c0] p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow opacity-75">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#050524]">{area.title}</h3>
                <p className="text-[#050524] mb-4">{area.desc}</p>
                <Link 
                  to="/services" 
                  className="text-[#050524] hover:text-navy font-medium transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Why Choose Us */}
        <section style={{ backgroundImage: `url(${why})` }}
        className=  "py-16 lg:py-24 opacity-75 rounded-sm bg-cover">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Why Rabbah Legal?</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center text-white font-bold ">
              <div>
                <ul className="space-y-6">
                  {[
                    "✓ 10+ years combined experience",
                    "✓ Client-focused approach",
                    "✓ Proven track record",
                    "✓ Transparent pricing"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text- mr-3 mt-1">•</span>
                      <span className="text-lg " >{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#050524] text-[#c0c0c0] p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
                <p className="mb-6">
                  We believe in delivering exceptional legal services with integrity 
                  and personalized attention to every client.
                </p>
                <Link 
                  to="/about" 
                  className="inline-block bg-silver text-[#c0c0c0] px-6 py-2 rounded-md font-medium hover:bg-white transition"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Recent Successes (Optional)
        <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Recent Successes</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Case study cards *
          </div>
        </section> */}
      </div>
    </AnimatedPage>      
  );
};

export default Home;