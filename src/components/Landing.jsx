import { useInView } from '../hooks';
import { FaChevronDown } from 'react-icons/fa';

export default function Landing() {
  const [ref, isInView] = useInView(0.1);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='hero' className='hero' ref={ref}>
      <div
        className={`hero__content${isInView ? ' hero__content--visible' : ''}`}>
        <h1 className='hero__name'>Angel Rodriguez</h1>
        <p className='hero__subtitle'>
          App Developer focused on scalable solutions and UI performance.
        </p>
        <p className='hero__meta'>Application Developer · U.S.A.</p>
        <div className='hero__ctas'>
          <button
            className='btn btn--primary'
            onClick={() => scrollTo('projects')}>
            View my work ↓
          </button>
          <button
            className='btn btn--outline'
            onClick={() => scrollTo('contact')}>
            Get in touch
          </button>
        </div>
      </div>
      <button
        className='hero__scroll'
        onClick={() => scrollTo('about')}
        aria-label='Scroll down'>
        <FaChevronDown />
      </button>
    </section>
  );
}
