import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Video',
    title: 'Видеоуроки',
    description: 'Качественные видеоматериалы в HD с возможностью скачивания для оффлайн-просмотра'
  },
  {
    icon: 'FileCheck',
    title: 'Тестирование',
    description: 'Регулярная проверка знаний с автоматической оценкой и детальной обратной связью'
  },
  {
    icon: 'Calendar',
    title: 'Расписание',
    description: 'Удобный календарь занятий и вебинаров с напоминаниями и уведомлениями'
  },
  {
    icon: 'Award',
    title: 'Сертификаты',
    description: 'Официальные сертификаты о прохождении курсов для вашего портфолио'
  },
  {
    icon: 'MessageSquare',
    title: 'Форум',
    description: 'Общайтесь с однокурсниками, задавайте вопросы и делитесь опытом'
  },
  {
    icon: 'TrendingUp',
    title: 'Прогресс',
    description: 'Отслеживайте свои достижения и прогресс обучения в личном кабинете'
  }
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Возможности платформы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto serif">
            Всё необходимое для эффективного обучения в одном месте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="serif text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
