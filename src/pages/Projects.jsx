import React, { useState } from 'react';
import { projectsData, allTags } from '../MockData/projectsData';


const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('Все');

  const filteredProjects = selectedTag === 'Все'
    ? projectsData
    : projectsData.filter((project) => project.tags.includes(selectedTag));

  return (
    <section id="projects" className="max-w-[1400px] mx-auto px-4 py-16 mt-20 md:mt25">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[var(--text)]">
        Портфолио
      </h2>

      {/* Фильтры */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full border transition
              ${selectedTag === tag
                ? 'bg-[var(--primary)] text-[var(--surface)] border-[var(--primary)]'
                : 'bg-[var(--surface)] text-[var(--text-muted)] border-[var(--border)] hover:bg-[var(--surface-hover)]'}
            `}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Сетка карточек */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[var(--surface)] rounded-lg shadow-[var(--shadow)] hover:shadow-lg transition overflow-hidden border border-[var(--border)]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">{project.title}</h3>
              <p className="text-[var(--text-muted)] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 bg-[var(--primary-light)] text-[var(--primary)] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[var(--primary)] text-[var(--surface)] rounded-md hover:bg-[var(--primary-hover)] transition"
              >
                Посмотреть проект
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

