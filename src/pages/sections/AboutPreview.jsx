import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
      
      {/* Фото/аватар */}
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--accent)] shadow-lg">
        <img
          src="/your-photo.jpg"
          alt="Serhii Dev"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Текст */}
      <div className="flex-1 space-y-4">
        <h2 className="text-3xl font-bold">Обо мне</h2>
        <p className="text-[var(--text)] text-lg">
          Я веб-разработчик, создаю современные приложения на React и Node. Люблю продуманный UX и чистый код.
        </p>
        <p className="text-[var(--text)] text-lg">
          Работал с командами из разных стран, ценю ответственность и креативность.
        </p>
        <Link
          to="/about"
          className="inline-block bg-[var(--accent)] text-[var(--text)] px-6 py-2 rounded-lg hover:opacity-90 transition"
        >
          Подробнее
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;
