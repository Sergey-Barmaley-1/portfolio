import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Простая имитация отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Спасибо! Форма отправлена.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="max-w-[1400px] mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 mt-20 md:mt25">
        Связаться со мной
      </h2>

      <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Напишите мне через форму ниже или по электронной почте. Всегда открыт к новым проектам и сотрудничеству!
      </p>

      {/* Основной контейнер */}
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Левая часть: Контакты и соцсети */}
        <div className="md:w-1/2 space-y-6">
          <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Контактная информация</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              📧 Email: <a href="mailto:your.email@example.com" className="text-indigo-600 hover:underline">your.email@example.com</a>
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">
                LinkedIn
              </a>
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">
                Telegram
              </a>
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition text-center"
          >
            Скачать резюме
          </a>
        </div>

        {/* Правая часть: Форма */}
        <div className="md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 shadow rounded-lg p-6 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Имя</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Сообщение</label>
              <textarea
                id="message"
                rows="5"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition"
            >
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
