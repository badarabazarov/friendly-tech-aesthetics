
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
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-tech-deep-blue/90 z-50 flex flex-col">
      <div className="container mx-auto px-4 py-4 flex justify-end">
        <button 
          onClick={onClose}
          className="p-2 text-white focus:outline-none"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
      
      <nav className="container mx-auto px-4 flex flex-col space-y-5 items-center">
        {['services', 'partners', 'clients', 'advantages', 'pricing', 'cases', 'testimonials', 'about'].map((item) => (
          <a 
            key={item} 
            href={`#${item}`} 
            onClick={onClose} 
            className="text-xl font-medium text-white hover:text-tech-neon transition-colors"
          >
            {item === 'services' ? 'Услуги' :
             item === 'partners' ? 'ПАРТНЕРЫ' :
             item === 'clients' ? 'Клиенты' :
             item === 'advantages' ? 'Преимущества' :
             item === 'pricing' ? 'Тарифы' :
             item === 'cases' ? 'Кейсы' :
             item === 'testimonials' ? 'Отзывы' :
             'Обо мне'}
          </a>
        ))}
        <a href="#contact" onClick={onClose} className="tech-btn-secondary">
          Контакты
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
