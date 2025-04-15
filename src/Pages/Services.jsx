import { Link } from 'react-router-dom';
import AnimatedPage from '../Components/AnimatedPage';

const Services = () => {
  const practiceAreas = [
    {
      icon: "⚖️",
      title: "Criminal Defense",
      description: "Aggressive representation for all criminal charges.",
      details: [
        "DUI/DWI Defense",
        "Drug Offenses",
        "White Collar Crimes",
        "Assault Charges",
        "Appeals & Post-Conviction Relief"
      ]
    },
    {
      icon: "🏢",
      title: "Corporate Law",
      description: "Strategic counsel for business entities.",
      details: [
        "Business Formation",
        "Contracts & Agreements",
        "Mergers & Acquisitions",
        "Corporate Compliance",
        "Intellectual Property"
      ]
    },
    {
      icon: "👨‍👩‍👧‍👦", 
      title: "Family Law",
      description: "Compassionate guidance for family matters.",
      details: [
        "Divorce & Separation",
        "Child Custody",
        "Adoption",
        "Prenuptial Agreements",
        "Domestic Violence Protection"
      ]
    }
  ];

  return (
    <AnimatedPage>
      <div className="bg-[#c0c0c0] text-[#050524]">
        {/* Hero Section */}
        <section className=" py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <div className="w-32 h-1 bg-[#c0c0c0] mx-auto mb-8"></div>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              Comprehensive legal solutions tailored to your unique needs
            </p>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 lg:py-10">
          <div className="grid md:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div key={index} className="group bg-gray-50 p-8 rounded-lg hover:shadow-md transition-all">
                <div className="text-5xl mb-4">{area.icon}</div>
                <h2 className="text-2xl font-bold mb-3">{area.title}</h2>
                <p className="text-gray-700 mb-6">{area.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {area.details.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-silver mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure which service you need?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our legal experts will help you identify the best solution for your situation.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-[#c0c0c0] text-[#050524] px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </div>
    </AnimatedPage>  
  );
};

export default Services;