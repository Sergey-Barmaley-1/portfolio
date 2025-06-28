import React from 'react'

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6
                        bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600
                        text-[var(--text)]  mt-20 md:mt25">
      {/* Фон можно заменить на видео или фото с помощью CSS или <video> */}
      
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg fade-in-up">
        Привет, я Сергей — веб-разработчик
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-xl drop-shadow-md">
        Создаю современные, быстрые и адаптивные сайты на React и других технологиях.
      </p>
      <a 
        href="#projects" 
        className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-md shadow-lg
                   hover:bg-indigo-100 transition"
      >
        Посмотреть работы
      </a>
    </section>
  );
};

export default Hero;