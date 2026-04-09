import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Landing />
        <div className="section-divider" aria-hidden="true">
          · · ·
        </div>
        <About />
        <div className="section-divider" aria-hidden="true">
          · · ·
        </div>
        <Resume />
        <div className="section-divider" aria-hidden="true">
          · · ·
        </div>
        <Projects />
        <div className="section-divider" aria-hidden="true">
          · · ·
        </div>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
