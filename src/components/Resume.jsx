import { useState } from 'react';
import { useInView } from '../hooks';
import { experience } from '../data/experienceData';

export default function Resume() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, isInView] = useInView();

  const activeItem = experience[activeTab];

  return (
    <section
      id='experience'
      className='experience section section--resume'
      ref={ref}>
      <div className={`fade-in${isInView ? ' visible' : ''}`}>
        <h2 className='section-label'>Experience.</h2>
        <div className='experience__container'>
          <div className='experience__tabs' role='tablist'>
            {experience.map((tab, index) => (
              <button
                key={tab.id}
                role='tab'
                aria-selected={activeTab === index}
                className={`experience__tab${activeTab === index ? ' experience__tab--active' : ''}`}
                onClick={() => setActiveTab(index)}>
                {tab.title}
              </button>
            ))}
          </div>
          <div className='experience__panel' role='tabpanel'>
            <div className='experience__detail' key={activeItem.id}>
              <h3 className='experience__role-title'>{activeItem.title}</h3>
              <p className='experience__location'>{activeItem.location}</p>
              <p className='experience__date'>{activeItem.date}</p>
              <ul className='experience__bullets'>
                {activeItem.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
