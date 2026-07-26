import React from 'react';
import Logo from './Logo';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-brand-gold/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
            <Logo />
            <p className="mt-6 text-gray-300 text-sm leading-relaxed font-light italic text-center lg:text-left max-w-md lg:max-w-none">
              Profesjonalna pomoc prawna oparta na zaufaniu i wieloletnim doświadczeniu. Zapraszamy do kontaktu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-brand-gold uppercase text-sm tracking-[0.2em] mb-6 font-bold">Na skróty</h4>
            <ul className="space-y-4">
              {[
                { name: 'O Kancelarii', href: '/o-kancelarii' },
                { name: 'Specjalizacje', href: '/#specjalizacje' },
                { name: 'Zasady współpracy', href: '/zasady-wspolpracy' },
                { name: 'Blog', href: '/blog' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-brand-gold transition-colors duration-300 text-sm flex items-center justify-center sm:justify-start group"
                  >
                    <span className="w-0 h-[1px] bg-brand-gold mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-brand-gold uppercase text-sm tracking-[0.2em] mb-6 font-bold">Kontakt</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-3 group">
                <Phone size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <a href="tel:+48790772130" className="hover:text-brand-gold transition-colors">+48 790 772 130</a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-3 group max-w-[280px] sm:max-w-none">
                <Mail size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <a href="mailto:adwokat.barbara.babka@gmail.com" className="hover:text-brand-gold transition-colors break-words">adwokat.barbara.babka@gmail.com</a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="https://www.google.com/maps/place/Miko%C5%82aja+Kopernika+12,+40-064+Katowice/@50.2548059,19.0120048,17z/data=!3m1!4b1!4m6!3m5!1s0x4716ce4671b00869:0x3ca5cc4c476fa406!8m2!3d50.2548025!4d19.0145797!16s%2Fg%2F11q2n77ngx?entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-gold transition-colors"
                  >
                    ul. Mikołaja Kopernika 12/7<br />40-064 Katowice
                  </a>
                  <div className="mt-2 pt-2 border-t border-brand-gold/10 text-[10px] text-gray-400">
                    <p>NIP: 6511639806</p>
                    <p>REGON: 384043894</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Law */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-[10px] text-gray-400 leading-tight text-center sm:text-left max-w-[200px] sm:max-w-none mt-auto lg:mt-0">
              Treści zamieszczone na niniejszej stronie mają charakter wyłącznie informacyjny i nie stanowią porady prawnej.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-gray-500">
            © {currentYear} Kancelaria Adwokacka Adwokat Barbara Babka. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-[10px] text-gray-500 uppercase tracking-widest items-center">
            <a href="/polityka-prywatnosci" className="hover:text-brand-gold transition-colors">Polityka prywatności</a>
            <a href="https://gronka.pl" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors font-bold">Strona stworzona przez gronka.pl</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
