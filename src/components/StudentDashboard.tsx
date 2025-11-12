import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const StudentDashboard = () => {
  const schedule = [
    { time: '10:00', title: 'Вебинар: Основы Python', type: 'live' },
    { time: '14:00', title: 'Дедлайн: Задание 3.2', type: 'deadline' },
    { time: '16:00', title: 'Вебинар: Machine Learning', type: 'live' }
  ];

  const certificates = [
    { title: 'Python для начинающих', date: '15.09.2024', id: 'CERT-2024-001' },
    { title: 'Веб-разработка', date: '20.08.2024', id: 'CERT-2024-002' }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Личный кабинет</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto serif">
            Управляйте своим обучением и отслеживайте прогресс
          </p>
        </div>

        <Tabs defaultValue="progress" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="progress">
              <Icon name="TrendingUp" size={16} className="mr-2" />
              Прогресс
            </TabsTrigger>
            <TabsTrigger value="schedule">
              <Icon name="Calendar" size={16} className="mr-2" />
              Расписание
            </TabsTrigger>
            <TabsTrigger value="certificates">
              <Icon name="Award" size={16} className="mr-2" />
              Сертификаты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="progress" className="mt-6 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Мои активные курсы</CardTitle>
                <CardDescription>Продолжите обучение с того места, где остановились</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Веб-разработка: Full-Stack</h4>
                      <p className="text-sm text-muted-foreground">Модуль 4 из 8</p>
                    </div>
                    <Badge variant="secondary">60%</Badge>
                  </div>
                  <Progress value={60} />
                  <Button size="sm" className="w-full">
                    <Icon name="Play" size={16} className="mr-2" />
                    Продолжить обучение
                  </Button>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Анализ данных и Machine Learning</h4>
                      <p className="text-sm text-muted-foreground">Модуль 3 из 10</p>
                    </div>
                    <Badge variant="secondary">35%</Badge>
                  </div>
                  <Progress value={35} />
                  <Button size="sm" variant="outline" className="w-full">
                    <Icon name="Play" size={16} className="mr-2" />
                    Продолжить обучение
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">15</div>
                      <div className="text-sm text-muted-foreground">Часов обучения</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">42</div>
                      <div className="text-sm text-muted-foreground">Заданий</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">8</div>
                      <div className="text-sm text-muted-foreground">Курсов</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Расписание на сегодня</CardTitle>
                <CardDescription>12 ноября 2024</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
                    <div className="text-sm font-medium text-primary min-w-[60px]">{item.time}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{item.title}</h4>
                        {item.type === 'live' && (
                          <Badge variant="default" className="text-xs">Live</Badge>
                        )}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Icon name="Bell" size={16} />
                    </Button>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full mt-4">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Открыть полный календарь
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Мои сертификаты</CardTitle>
                <CardDescription>Сертификаты о прохождении курсов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {certificates.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="Award" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">ID: {cert.id}</p>
                        <p className="text-sm text-muted-foreground">Выдан: {cert.date}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                  </div>
                ))}
                
                <div className="pt-4 text-center text-sm text-muted-foreground">
                  Завершите курсы, чтобы получить больше сертификатов
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default StudentDashboard;
