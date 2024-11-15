import React from "react";
import {
  GlassWater,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1D0808] text-[#c7b79c] relative">
      <div className="absolute inset-0 art-deco-pattern opacity-5"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-20 pb-8 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GlassWater size={32} />
              <span className="font-serif text-2xl">Good Old Drinks</span>
            </div>
            <p className="text-gray-400 mb-6">
              Barman privée pour tous vos événements
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#c7b79c] flex items-center justify-center hover:bg-[#c7b79c] hover:text-[#1D0808] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#c7b79c] flex items-center justify-center hover:bg-[#c7b79c] hover:text-[#1D0808] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#c7b79c] flex items-center justify-center hover:bg-[#c7b79c] hover:text-[#1D0808] transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#c7b79c] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#cocktails"
                  className="text-gray-400 hover:text-[#c7b79c] transition-colors"
                >
                  Cocktails
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-[#c7b79c] transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#c7b79c] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-xl mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Mariages</li>
              <li className="text-gray-400">Soirées privées</li>
              <li className="text-gray-400">Soirée d&apos;entreprise</li>
              <li className="text-gray-400">Evènements sportifs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-[#c7b79c]" />
                <span>06.74.74.74.74</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-[#c7b79c]" />
                <span>goodolddrinks@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-[#c7b79c]" />
                <span>
                  123 Cocktail Avenue
                  <br />
                  Mixology City, MC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Art Deco Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-[1px] bg-[#c7b79c] opacity-20"></div>
          <div className="w-2 h-2 rotate-45 bg-[#c7b79c]"></div>
          <div className="flex-1 h-[1px] bg-[#c7b79c] opacity-20"></div>
        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Good Old Drinks. Tout droits réservés.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-[#c7b79c] transition-colors"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#c7b79c] transition-colors"
            >
              Conditions d&apos;utilisation
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#c7b79c] transition-colors"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
