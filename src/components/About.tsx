import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const stats = [
  { icon: 'Users', value: '50,000+', label: 'Активных студентов' },
  { icon: 'BookOpen', value: '500+', label: 'Курсов и программ' },
  { icon: 'GraduationCap', value: '200+', label: 'Экспертов-преподавателей' },
  { icon: 'Award', value: '35,000+', label: 'Выданных сертификатов' }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">О платформе</h2>
            <p className="text-lg text-muted-foreground serif">
              LearnTogether — это современная образовательная платформа для серьезного обучения
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Наша миссия</h3>
                <p className="text-muted-foreground serif">
                  Мы делаем качественное образование доступным каждому. Наша цель — помочь студентам 
                  получить актуальные знания и навыки для успешной карьеры в IT-индустрии.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Lightbulb" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Наш подход</h3>
                <p className="text-muted-foreground serif">
                  Академический строгий подход к обучению, практические задания от индустрии 
                  и постоянная поддержка менторов обеспечивают высокое качество образования.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg bg-muted/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                  <Icon name={stat.icon as any} className="text-primary" size={24} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
