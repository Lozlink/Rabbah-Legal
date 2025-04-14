import { Link } from 'react-router-dom';
import { FaArrowUp, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaTwitter />, name: "Twitter", url: "#" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "#" },
    { icon: <FaFacebook />, name: "Facebook", url: "#" }
  ];

  return (
    <footer className="bg-navy text-white pt-16 pb-8 relative">
       <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 bg-silver text-navy p-3 rounded-full shadow-lg hover:bg-white transition-all"
      >
        <FaArrowUp size={18} />
      </button>

      
      
      <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        {/* Column 1: About */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-silver">Rabbah Legal</h3>
          <p className="mb-4">
            Delivering exceptional legal services with integrity and personalized attention.
          </p>
          <div className="flex space-x-4 mt-6" >
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                className="text-silver hover:text-white transition-colors"
                aria-label={social.name}
              >
                <span className="text-xl">{social.icon}</span> {/* Placeholder for icons */}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-silver">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'About', 'Services', 'Contact'].map((link) => (
              <li key={link}>
                <Link 
                  to={`/${link.toLowerCase()}`} 
                  className="hover:text-silver transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Practice Areas */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-silver">Practice Areas</h3>
          <ul className="space-y-2">
            {['Criminal Defense', 'Corporate Law', 'Family Law', 'Real Estate'].map((area) => (
              <li key={area}>
                <Link 
                  to="/services" 
                  className="hover:text-silver transition-colors"
                >
                  {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-silver">Contact Us</h3>
          <address className="not-italic">
            <p className="mb-2">123 Legal Avenue</p>
            <p className="mb-2">Sydney, NSW 2176</p>
            <p className="mb-4">
              <a href="tel:+12125551234" className="hover:text-silver transition-colors">
                (02) 1234 5678
              </a>
            </p>
            <p>
              <a href="mailto:info@rabbahlegal.com" className="hover:text-silver transition-colors">
                info@rabbahlegal.com
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Future use */}
      {/* Copyright */}
      {/* <div className="border-t border-silver pt-8 text-center text-silver text-sm">
        <p>
          &copy; {new Date().getFullYear()} Rabbah Legal. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div> */}
    </div>
</footer>
  );
};

export default Footer;