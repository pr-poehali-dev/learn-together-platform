import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Courses from '@/components/Courses';
import StudentDashboard from '@/components/StudentDashboard';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Courses />
        <StudentDashboard />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
