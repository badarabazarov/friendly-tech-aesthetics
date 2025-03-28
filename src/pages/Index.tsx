
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 px-4 md:px-6 lg:px-8 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-tech-deep-blue">
            Automagica
          </a>
          
          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-tech-deep-blue hover:text-tech-neon transition-colors">Услуги</a>
            <a href="#partners" className="text-tech-deep-blue hover:text-tech-neon transition-colors">ПАРТНЕРЫ</a>
            <a href="#clients" className="text-tech-deep-blue hover:text-tech-neon transition-colors">Клиенты</a>
            <a href="#advantages" className="text-tech-deep-blue hover:text-tech-neon transition-colors">Преимущества</a>
            <a href="#pricing" className="text-tech-deep-blue hover:text-tech-neon transition-colors">Тарифы</a>
            <a href="#cases" className="text-tech-deep-blue hover:text-tech-neon transition-colors">Кейсы</a>
            <a href="#testimonials" className="text-tech-deep-blue hover:text-tech-neon transition-colors">Отзывы</a>
            <a href="#about" className="text-tech-deep-blue hover:text-tech-neon transition-colors">Обо мне</a>
          </nav>
          
          <div className="hidden md:block">
            <a href="#contact" className="tech-btn-secondary">
              Контакты
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className="md:hidden p-2 focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={24} className="text-tech-deep-blue" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Automagica
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Современные технологические решения для вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#services" className="tech-btn-primary hover-lift">
              Узнать больше
            </a>
            <a href="#contact" className="tech-btn-secondary hover-lift">
              Связаться
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Sections (Placeholders) */}
      {['services', 'partners', 'clients', 'advantages', 'pricing', 'cases', 'testimonials', 'about'].map((section) => (
        <section 
          key={section} 
          id={section} 
          className="py-12 md:py-16 px-4 md:px-6 lg:px-8 odd:bg-gray-50"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-tech-deep-blue text-center">
              {section === 'services' ? 'Услуги' :
               section === 'partners' ? 'ПАРТНЕРЫ' :
               section === 'clients' ? 'Клиенты' :
               section === 'advantages' ? 'Преимущества' :
               section === 'pricing' ? 'Тарифы' :
               section === 'cases' ? 'Кейсы' :
               section === 'testimonials' ? 'Отзывы' :
               'Обо мне'}
            </h2>
            <div className="h-32 flex justify-center items-center text-gray-500">
              [Содержимое секции {section}]
            </div>
          </div>
        </section>
      ))}

      {/* Contact CTA Section */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-tech-deep-blue text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Свяжитесь с нами</h2>
          <p className="text-lg mb-8 opacity-90">
            Готовы начать? Наша команда ответит на все ваши вопросы.
          </p>
          <a href="mailto:info@automagica.tech" className="tech-btn-secondary inline-block hover-lift">
            Начать сейчас
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 lg:px-8 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600">
                © 2025 Automagica. Все права защищены.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-tech-neon transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-tech-neon transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
