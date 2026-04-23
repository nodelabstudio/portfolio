import { useState } from 'react';
import { useInView } from '../hooks';
import { experience, education } from '../data/experienceData';

export default function Resume() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, isInView] = useInView();

  const allTabs = [
    ...experience.map((exp) => ({ type: 'work', ...exp })),
    { type: 'education', id: 'education', title: 'Education' },
  ];

  const activeItem = allTabs[activeTab];

  return (
    <section id="experience" className="experience section section--resume" ref={ref}>
      <div className={`fade-in${isInView ? ' visible' : ''}`}>
        <p className="section-label">02 // EXPERIENCE</p>
        <div className="experience__container">
          <div className="experience__tabs" role="tablist">
            {allTabs.map((tab, index) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === index}
                className={`experience__tab${activeTab === index ? ' experience__tab--active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="experience__panel" role="tabpanel">
            {activeItem.type === 'work' ? (
              <div className="experience__detail" key={activeItem.id}>
                <h3 className="experience__role-title">{activeItem.title}</h3>
                <p className="experience__location">{activeItem.location}</p>
                <p className="experience__date">{activeItem.date}</p>
                <ul className="experience__bullets">
                  {activeItem.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="experience__detail" key="education">
                {education.map((edu, i) => (
                  <div key={i} className="experience__edu-item">
                    <h3 className="experience__role-title">
                      {edu.institution}
                    </h3>
                    <p className="experience__edu-detail">{edu.detail}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
