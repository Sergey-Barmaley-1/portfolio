import React from 'react';

const skills = ['React', 'Node', 'TypeScript', 'UX', 'Tailwind', 'REST API', 'Git'];

const About = () => {
  return (
    <section id="about" className="max-w-[1400px] mx-auto px-4 py-16 mt-20 md:mt25">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        Обо мне
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Фото или иллюстрация */}
        <img
          src="/your-photo.jpg"
          alt="Serhii"
          className="w-72 h-72 rounded-2xl object-cover shadow-lg"
        />

        <div className="flex-1">
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-[var(--text)]">
            Привет! Я Сергей, веб-разработчик, который создает современные, быстрые и удобные сайты.
            Моя цель — решать задачи бизнеса через качественный и продуманный UI/UX.
            Опыт работы с React, Node и современным стеком более 3 лет.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Мои навыки</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
<span
  key={skill}
  className="px-4 py-2 bg-[var(--primary)] text-[var(--text)] rounded-full text-sm shadow hover:bg-[var(--bg)] transition"
>
  {skill}
</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
