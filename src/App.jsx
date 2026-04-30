import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Resume from './components/Resume';
import AIWork from './components/AIWork';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Landing />
        <About />
        <Resume />
        <AIWork />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
