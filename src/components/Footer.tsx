import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                <Icon name="GraduationCap" className="text-primary-foreground" size={24} />
              </div>
              <span className="text-xl font-bold">LearnTogether</span>
            </div>
            <p className="text-sm text-muted-foreground serif">
              Профессиональная образовательная платформа для серьезного обучения
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Платформа</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Курсы</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Помощь</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Политика</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@learntogether.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 LearnTogether. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Facebook" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Twitter" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Linkedin" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Youtube" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
