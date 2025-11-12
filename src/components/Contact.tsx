import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contact = () => {
  return (
    <section id="contacts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground serif">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                  <CardDescription>Мы ответим в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="ivan@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите, чем мы можем помочь..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-sm text-muted-foreground">info@learntogether.ru</p>
                      <p className="text-sm text-muted-foreground">support@learntogether.ru</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Телефон</h4>
                      <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name="MapPin" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Адрес</h4>
                      <p className="text-sm text-muted-foreground">
                        г. Москва, ул. Примерная, д. 1<br />
                        БЦ "Образование", офис 301
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <h4 className="font-medium mb-3">Мы в соцсетях</h4>
                    <div className="flex gap-3">
                      <Button size="icon" variant="outline">
                        <Icon name="Facebook" size={20} />
                      </Button>
                      <Button size="icon" variant="outline">
                        <Icon name="Twitter" size={20} />
                      </Button>
                      <Button size="icon" variant="outline">
                        <Icon name="Linkedin" size={20} />
                      </Button>
                      <Button size="icon" variant="outline">
                        <Icon name="Youtube" size={20} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
