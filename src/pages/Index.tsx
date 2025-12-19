import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" className="text-primary" size={32} />
              <span className="text-xl font-bold">НИЦР МГТУ</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О курсе', 'Программа', 'Преподаватель', 'Для кого', 'Регистрация', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="главная" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-primary/20 text-primary border-primary">МГТУ им. Баумана × Остек</Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Инженер-технолог по производству радиоэлектронных средств
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Профессиональная переподготовка от лидеров образования и индустрии приборостроения
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => scrollToSection('регистрация')}>
                  Записаться на курс
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('о-курсе')}>
                  Узнать больше
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/50">
                <div>
                  <div className="text-4xl font-bold text-primary">72</div>
                  <div className="text-sm text-muted-foreground">часа обучения</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">90%</div>
                  <div className="text-sm text-muted-foreground">компаний с кадровым голодом</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">лет опыта Остек</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="о-курсе" className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">О курсе</h2>
                <p className="text-xl text-muted-foreground">
                  Уникальный образовательный проект в области приборостроения
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 space-y-4 bg-card border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Building2" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Остек</h3>
                  <p className="text-muted-foreground">
                    СМТ компания с более чем 30-летней историей и экспертным практическим опытом в создании производств электроники под ключ
                  </p>
                </Card>

                <Card className="p-8 space-y-4 bg-card border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">МГТУ им. Баумана</h3>
                  <p className="text-muted-foreground">
                    Ведущий технический ВУЗ страны. В 2025 году, по рейтингу QS, занимает 2-е место в России после МГУ
                  </p>
                </Card>
              </div>

              <Card className="p-8 bg-primary/10 border-primary/30">
                <p className="text-lg leading-relaxed">
                  Программа курса разработана совместными усилиями специалистов двух лидеров индустрии высшего образования и индустрии приборостроения. 
                  В курсе обучения использовались практики ведущих мировых предприятий и бесценный опыт сотен отечественных производств.
                </p>
              </Card>

              <div className="text-center p-8 bg-card border border-primary/30 rounded-lg">
                <Icon name="TrendingUp" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">Самая востребованная профессия</h3>
                <p className="text-muted-foreground text-lg">
                  Инженер-технолог по производству радиоэлектронных средств – самая востребованная профессия в сфере производства электроники
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="для-кого" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">Для кого этот курс</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <h3 className="text-3xl font-bold">Для специалистов</h3>
                  </div>
                  
                  <Card className="p-6 bg-card border-border space-y-4">
                    <div className="flex gap-4">
                      <Icon name="TrendingUp" className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold mb-2">Повышение профессионализма</h4>
                        <p className="text-sm text-muted-foreground">72 часа исключительно полезного экспертного контента</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-border space-y-4">
                    <div className="flex gap-4">
                      <Icon name="Award" className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold mb-2">Подтверждение компетентности</h4>
                        <p className="text-sm text-muted-foreground">Официальный документ от МГТУ им. Баумана</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-border space-y-4">
                    <div className="flex gap-4">
                      <Icon name="Rocket" className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold mb-2">Перспективы карьерного роста</h4>
                        <p className="text-sm text-muted-foreground">Квалифицированный персонал – ценный актив любой компании</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-border space-y-4">
                    <div className="flex gap-4">
                      <Icon name="Lightbulb" className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold mb-2">Личностное развитие</h4>
                        <p className="text-sm text-muted-foreground">Позволяет быстрее адаптироваться к новым условиям и расширить кругозор</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="Briefcase" className="text-primary" size={24} />
                    </div>
                    <h3 className="text-3xl font-bold">Для работодателей</h3>
                  </div>

                  <Card className="p-6 bg-card border-border space-y-4">
                    <div className="flex gap-4">
                      <Icon name="Target" className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold mb-2">Повышение конкурентоспособности</h4>
                        <p className="text-sm text-muted-foreground">Квалификация сотрудников напрямую влияет на производительность и качество продукции</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-border space-y-4">
                    <div className="flex gap-4">
                      <Icon name="Zap" className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold mb-2">Быстрая адаптация к изменениям</h4>
                        <p className="text-sm text-muted-foreground">Позволяет гибко реагировать на новые вызовы и усиливать рыночные позиции</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-border space-y-4">
                    <div className="flex gap-4">
                      <Icon name="Users" className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold mb-2">Решение кадровых вопросов</h4>
                        <p className="text-sm text-muted-foreground">Сотрудники более мотивированы, значительно снижается текучесть кадров</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-border space-y-4">
                    <div className="flex gap-4">
                      <Icon name="Sparkles" className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold mb-2">Внутренний потенциал</h4>
                        <p className="text-sm text-muted-foreground">Подготовленный персонал мотивирован в развитии и повышении эффективности</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <Card className="p-8 bg-destructive/10 border-destructive/30">
                <div className="flex items-start gap-4">
                  <Icon name="AlertCircle" className="text-destructive flex-shrink-0" size={32} />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Кадровый голод в отрасли</h4>
                    <p className="text-muted-foreground mb-4">
                      По данным ИРПЭ – 90% компаний столкнулись с кадровым голодом. 
                      По данным РСПП, прогнозируется только рост дальнейшего дефицита кадров в области радиоэлектроники.
                    </p>
                    <p className="font-semibold">
                      Сегодня – самое время, когда вложение в повышение квалификации в разы окупается как для сотрудников, так и для работодателей.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="программа" className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">Программа обучения</h2>
                <p className="text-xl text-muted-foreground">
                  Учебный курс, который хочется пройти до конца
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    module: 'Модуль 1',
                    title: 'Основы производства электроники',
                    topics: ['Технологические процессы', 'Оборудование и инструменты', 'Стандарты качества']
                  },
                  {
                    module: 'Модуль 2',
                    title: 'Проектирование производства',
                    topics: ['Планирование производственных линий', 'Оптимизация процессов', 'Контроль качества']
                  },
                  {
                    module: 'Модуль 3',
                    title: 'Современные технологии',
                    topics: ['SMT технологии', 'Автоматизация производства', 'Инновации в отрасли']
                  },
                  {
                    module: 'Модуль 4',
                    title: 'Практическое применение',
                    topics: ['Кейсы реальных производств', 'Решение производственных задач', 'Итоговая аттестация']
                  }
                ].map((module, idx) => (
                  <Card key={idx} className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{idx + 1}</span>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <Badge variant="outline" className="mb-2">{module.module}</Badge>
                          <h3 className="text-xl font-bold">{module.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {module.topics.map((topic, topicIdx) => (
                            <li key={topicIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Icon name="Check" className="text-primary" size={16} />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-8 bg-primary/10 border-primary/30 text-center">
                <Icon name="FileCheck" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">Сертификат МГТУ им. Баумана</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  После успешного завершения курса вы получите официальный документ о профессиональной переподготовке от МГТУ им. Баумана
                </p>
                <Badge className="bg-primary text-primary-foreground">Государственный образец</Badge>
              </Card>
            </div>
          </div>
        </section>

        <section id="преподаватель" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-card border-border">
                <div className="grid md:grid-cols-[200px,1fr] gap-8">
                  <div className="mx-auto md:mx-0">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={80} />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">Иванов Иван Иванович</h2>
                      <p className="text-primary font-semibold">Педагог МГТУ им. Баумана</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Icon name="Award" className="text-primary" size={24} />
                        <span>30+ лет опыта в отрасли</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="BookOpen" className="text-primary" size={24} />
                        <span>Автор учебных программ</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Users" className="text-primary" size={24} />
                        <span>Эксперт-практик ведущих производств</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Специалист с многолетним опытом работы в области приборостроения и радиоэлектроники. 
                      Участвовал в разработке и внедрении технологических процессов на ведущих предприятиях отрасли.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="регистрация" className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 md:p-12 bg-card border-border">
                <div className="text-center space-y-4 mb-8">
                  <h2 className="text-4xl font-bold">Записаться на курс</h2>
                  <p className="text-muted-foreground">
                    Заполните форму, и мы свяжемся с вами для уточнения деталей
                  </p>
                </div>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы свяжемся с вами в ближайшее время.'); }}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Фамилия Имя Отчество *</label>
                    <Input required placeholder="Введите ФИО" className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <Input required type="email" placeholder="example@email.com" className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон *</label>
                    <Input required type="tel" placeholder="+7 (___) ___-__-__" className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Организация</label>
                    <Input placeholder="Название организации" className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Комментарий</label>
                    <Textarea placeholder="Дополнительная информация" className="bg-background" rows={4} />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </section>

        <section id="контакты" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Контакты</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 bg-card border-border text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Адрес</h3>
                    <p className="text-sm text-muted-foreground">Москва, 2-я Бауманская ул., 5</p>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Телефон</h3>
                    <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground">info@bmstu.ru</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-border bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="GraduationCap" className="text-primary" size={32} />
              <span className="text-xl font-bold">НИЦР МГТУ им. Баумана</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 НИЦР МГТУ им. Баумана. Все права защищены.
            </p>
            <div className="flex justify-center gap-6 pt-4">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Политика конфиденциальности
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Пользовательское соглашение
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}