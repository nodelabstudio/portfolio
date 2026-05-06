import { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks';

const sections = [
  { id: 'about', label: 'About', number: '01' },
  { id: 'experience', label: 'Experience', number: '02' },
  { id: 'ai-work', label: 'AI Work', number: '03' },
  { id: 'projects', label: 'Projects', number: '04' },
  { id: 'contact', label: 'Contact', number: '05' },
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <button className='nav__logo' onClick={() => scrollTo('hero')}>
        Angel Rodriguez
      </button>

      <button
        className={`nav__hamburger${menuOpen ? ' nav__hamburger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label='Toggle navigation'
        aria-expanded={menuOpen}>
        <span />
        <span />
        <span />
      </button>

      <div className={`nav__menu${menuOpen ? ' nav__menu--open' : ''}`}>
        <ul className='nav__links'>
          {sections.map(({ id, label, number }) => (
            <li key={id}>
              <button
                className={`nav__link${activeSection === id ? ' nav__link--active' : ''}`}
                onClick={() => scrollTo(id)}>
                <span className='nav__link-number'>{number}.</span> {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
