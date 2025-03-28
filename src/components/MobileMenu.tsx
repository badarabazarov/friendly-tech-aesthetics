
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Close mobile menu when escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-tech-deep-blue/95 z-50 flex flex-col">
      <div className="container mx-auto px-4 py-6 flex justify-end">
        <button 
          onClick={onClose}
          className="p-2 text-white focus:outline-none"
        >
          <X size={24} />
        </button>
      </div>
      
      <nav className="container mx-auto px-4 py-10 flex flex-col space-y-6 items-center">
        <a href="#services" onClick={onClose} className="text-xl font-medium text-white hover:text-tech-neon transition-colors">
          Услуги
        </a>
        <a href="#partners" onClick={onClose} className="text-xl font-medium text-white hover:text-tech-neon transition-colors">
          ПАРТНЕРЫ
        </a>
        <a href="#clients" onClick={onClose} className="text-xl font-medium text-white hover:text-tech-neon transition-colors">
          Клиенты
        </a>
        <a href="#advantages" onClick={onClose} className="text-xl font-medium text-white hover:text-tech-neon transition-colors">
          Преимущества
        </a>
        <a href="#pricing" onClick={onClose} className="text-xl font-medium text-white hover:text-tech-neon transition-colors">
          Тарифы
        </a>
        <a href="#cases" onClick={onClose} className="text-xl font-medium text-white hover:text-tech-neon transition-colors">
          Кейсы
        </a>
        <a href="#testimonials" onClick={onClose} className="text-xl font-medium text-white hover:text-tech-neon transition-colors">
          Отзывы
        </a>
        <a href="#about" onClick={onClose} className="text-xl font-medium text-white hover:text-tech-neon transition-colors">
          Обо мне
        </a>
        <a href="#contact" onClick={onClose} className="tech-btn-secondary mt-4">
          Контакты
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
