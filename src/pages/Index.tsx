import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import ProjectCard from '../components/Project.Card';
import Footer from '../components/Footer';
import Contact from '../components/Contact';


const Index = () => {
    return (
        <div
            className="min-h-screen transition-all duration-500 bg-gradient-to-br
        from-slate-50 to-slate-200 text-slate-900"
        >
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <ProjectCard />
            <Contact />
            <Footer />
        </div>
    );
};

export default Index;
