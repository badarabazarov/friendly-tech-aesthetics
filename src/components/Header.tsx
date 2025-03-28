
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-3 glass tech-shadow' : 'py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-tech-deep-blue">Automagica<span className="text-tech-neon">.</span></span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="font-medium text-tech-deep-blue hover:text-tech-neon transition-colors">
            Услуги
          </a>
          <a href="#partners" className="font-medium text-tech-deep-blue hover:text-tech-neon transition-colors">
            ПАРТНЕРЫ
          </a>
          <a href="#clients" className="font-medium text-tech-deep-blue hover:text-tech-neon transition-colors">
            Клиенты
          </a>
          <a href="#advantages" className="font-medium text-tech-deep-blue hover:text-tech-neon transition-colors">
            Преимущества
          </a>
          <a href="#pricing" className="font-medium text-tech-deep-blue hover:text-tech-neon transition-colors">
            Тарифы
          </a>
          <a href="#cases" className="font-medium text-tech-deep-blue hover:text-tech-neon transition-colors">
            Кейсы
          </a>
          <a href="#testimonials" className="font-medium text-tech-deep-blue hover:text-tech-neon transition-colors">
            Отзывы
          </a>
          <a href="#about" className="font-medium text-tech-deep-blue hover:text-tech-neon transition-colors">
            Обо мне
          </a>
          <a href="#contact" className="tech-btn-secondary">
            Контакты
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="p-2 text-tech-deep-blue focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
};

export default Header;
