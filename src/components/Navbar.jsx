import { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks';
import ThemeToggle from './ThemeToggle';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'ai-work', label: 'AI Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const sectionIds = [
  'hero',
  'about',
  'experience',
  'ai-work',
  'projects',
  'contact',
];

export default function Navbar() {
  const activeSection = useScrollSpy(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView();
    setMenuOpen(false);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        document.querySelector('.nav__hamburger')?.focus();
      }
    }

    const desktop = window.matchMedia('(min-width: 1101px)');
    function closeOnDesktop(event) {
      if (event.matches) setMenuOpen(false);
    }

    window.addEventListener('keydown', handleKeyDown);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} aria-label='Primary'>
      <button className='nav__logo' onClick={() => scrollTo('hero')}>
        Angel Rodriguez
      </button>

      <div id='navigation-menu' className={`nav__menu${menuOpen ? ' nav__menu--open' : ''}`}>
        <ul className='nav__links'>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav__link${activeSection === id ? ' nav__link--active' : ''}`}
                onClick={() => scrollTo(id)}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='nav__actions'>
        <ThemeToggle />
        <button
          type='button'
          className={`nav__hamburger${menuOpen ? ' nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-controls='navigation-menu'
          aria-expanded={menuOpen}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
