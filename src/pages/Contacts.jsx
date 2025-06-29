import React, { useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = import.meta.env.VITE_API_SERVICE_ID;
    const templateID = import.meta.env.VITE_API_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert("Спасибо! Ваше сообщение отправлено.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Произошла ошибка при отправке. Попробуйте позже.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="max-w-[1400px] mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 mt-20 md:mt-25">
        Связаться со мной
      </h2>

      <p className="text-center text-lg md:text-xl text-[var(--text-muted)] mb-12 max-w-2xl mx-auto">
        Напишите мне через форму ниже или по электронной почте. Всегда открыт к
        новым проектам и сотрудничеству!
      </p>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Левая часть */}
        <div className="md:w-1/2 space-y-6">
          <div className="bg-[var(--surface)] shadow rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Контактная информация
            </h3>
            <p className="text-[var(--text)] mb-2">
              📧 Email:{" "}
              <a
                href="mailto:3standasha@gmail.com"
                className="text-[var(--primary)] hover:underline"
              >
                3standasha@gmail.com
              </a>
            </p>
            <p className="text-[var(--text)] mb-2">
              📞 Телефон:{" "}
              <a
                href="tel:+380666603280"
                className="text-[var(--primary)] hover:underline"
              >
                +38 (066) 660-32-80
              </a>
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition"
              >
                LinkedIn
              </a>
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition"
              >
                Telegram
              </a>
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 bg-[var(--primary)] text-[var(--surface)] rounded-md shadow hover:bg-[var(--primary-hover)] transition text-center"
          >
            Скачать резюме
          </a>
        </div>

        {/* Правая часть: форма */}
        <div className="md:w-1/2">
          <form
            onSubmit={handleSubmit}
            autoComplete="on"
            className="bg-[var(--surface)] shadow rounded-lg p-6 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-[var(--text)] mb-2">
                Имя
              </label>
              <input
                type="text"
                id="name"
                required
                autoComplete="name"
                className="w-full px-4 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring focus:ring-[var(--primary-light)] dark:bg-[var(--surface)] text-[var(--text)]"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[var(--text)] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                autoComplete="email"
                className="w-full px-4 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring focus:ring-[var(--primary-light)] dark:bg-[var(--surface)] text-[var(--text)]"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[var(--text)] mb-2"
              >
                Сообщение
              </label>
              <textarea
                id="message"
                rows="5"
                required
                autoComplete="off"
                className="w-full px-4 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring focus:ring-[var(--primary-light)] dark:bg-[var(--surface)] text-[var(--text)]"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-[var(--primary)] text-[var(--surface)] rounded-md shadow hover:bg-[var(--primary-hover)] transition"
            >
              {loading ? "Отправка..." : "Отправить сообщение"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
