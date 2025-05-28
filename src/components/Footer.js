import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-primary/80 text-primary-foreground py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <div className="flex items-center  gap-2  mb-4">
            <Logo c='!fill-primary-foreground' width={30} height={30}/>
            <h3 className="text-xl font-semibold  ">Khana Badoosh</h3>
          </div>
          <p className="text-sm">
            Unlock your next adventure with tailor-made tours across the globe. Where memories are made and dreams take flight.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#tours" className="hover:underline">Tour Packages</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#faq" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-3">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Office 609, Apollo Tower E11/4, Islamabad
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +923411411991
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@khanabadoosh.com
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          </div>
        </div>

      </div>
      <div className="text-center text-sm mt-10 border-t border-white/20 pt-6">
        © {new Date().getFullYear()} Khanna Badoosh. All rights reserved by sigma boy .
      </div>
    </footer>
  );
};

export default Footer;