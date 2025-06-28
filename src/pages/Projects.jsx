import React, { useState } from 'react';

// Пример данных
const projectsData = [
  {
    id: 1,
    title: 'React Landing Page',
    description: 'Современная лендинг-страница на React и Tailwind.',
    image: '/projects/react-landing.jpg',
    link: 'https://your-demo-link.com',
    tags: ['React', 'Frontend'],
  },
  {
    id: 2,
    title: 'Fullstack CRM',
    description: 'CRM-система на Node, Express и MongoDB.',
    image: '/projects/fullstack-crm.jpg',
    link: 'https://your-demo-link.com',
    tags: ['Fullstack', 'Node'],
  },
  {
    id: 3,
    title: 'UX Дизайн концепт',
    description: 'Прототип и дизайн для мобильного приложения.',
    image: '/projects/ux-design.jpg',
    link: 'https://your-demo-link.com',
    tags: ['UX', 'Дизайн'],
  },
];

const allTags = ['Все', 'React', 'Fullstack', 'UX', 'Frontend', 'Node', 'Дизайн'];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('Все');

  const filteredProjects = selectedTag === 'Все'
    ? projectsData
    : projectsData.filter((project) => project.tags.includes(selectedTag));

  return (
    <section id="projects" className="max-w-[1400px] mx-auto px-4 py-16 mt-20 md:mt25">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        Портфолио
      </h2>

      {/* Фильтры */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full border
                        ${selectedTag === tag
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700'}
                        transition`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Сетка карточек */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full dark:bg-indigo-800 dark:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
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
