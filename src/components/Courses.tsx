import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const coursesData = [
  {
    id: 1,
    title: 'Основы программирования на Python',
    description: 'Изучите основы Python с нуля. Идеально для начинающих разработчиков.',
    category: 'Программирование',
    level: 'Начальный',
    duration: '8 недель',
    students: 12453,
    rating: 4.8,
    price: '15 990 ₽',
    progress: 0
  },
  {
    id: 2,
    title: 'Анализ данных и Machine Learning',
    description: 'Научитесь работать с данными и создавать модели машинного обучения.',
    category: 'Data Science',
    level: 'Продвинутый',
    duration: '12 недель',
    students: 8234,
    rating: 4.9,
    price: '29 990 ₽',
    progress: 35
  },
  {
    id: 3,
    title: 'Веб-разработка: Full-Stack',
    description: 'Станьте полноценным веб-разработчиком. Frontend и Backend.',
    category: 'Веб-разработка',
    level: 'Средний',
    duration: '16 недель',
    students: 15678,
    rating: 4.7,
    price: '39 990 ₽',
    progress: 60
  },
  {
    id: 4,
    title: 'Управление проектами: Agile & Scrum',
    description: 'Освойте современные методологии управления IT-проектами.',
    category: 'Менеджмент',
    level: 'Средний',
    duration: '6 недель',
    students: 6789,
    rating: 4.6,
    price: '19 990 ₽',
    progress: 0
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные курсы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto serif">
            Выберите курс из нашего каталога и начните обучение уже сегодня
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {coursesData.map((course, index) => (
            <Card 
              key={course.id} 
              className="flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{course.category}</Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Icon name="Star" size={16} className="fill-primary text-primary" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="serif">{course.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="BarChart" size={16} />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} />
                    <span>{course.students.toLocaleString()} студентов</span>
                  </div>
                </div>

                {course.progress > 0 && (
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Прогресс</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} />
                  </div>
                )}
              </CardContent>
              
              <CardFooter className="flex items-center justify-between pt-4 border-t">
                <div className="text-2xl font-bold text-primary">{course.price}</div>
                <Button size="sm">
                  {course.progress > 0 ? 'Продолжить' : 'Записаться'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            <Icon name="Grid3x3" size={20} className="mr-2" />
            Смотреть все курсы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
