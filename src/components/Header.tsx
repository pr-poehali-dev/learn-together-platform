import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <Icon name="GraduationCap" className="text-primary-foreground" size={24} />
            </div>
            <span className="text-xl font-bold">LearnTogether</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
              Курсы
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              О платформе
            </a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Войти
            </Button>
            <Button size="sm">
              Регистрация
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
                Курсы
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                О платформе
              </a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" size="sm">
                  Войти
                </Button>
                <Button size="sm">
                  Регистрация
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
