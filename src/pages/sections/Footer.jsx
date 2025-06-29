import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[var(--bg)] text-[var(--text)] border-t border-[var(--border)] mt-16">
      <div className="max-w-[1400px] mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Левый блок — навигация */}
        <nav className="flex gap-6 flex-wrap text-sm">
          <Link to="/" className="hover:text-[var(--primary)]">Home</Link>
          <Link to="/about" className="hover:text-[var(--primary)]">About</Link>
          <Link to="/projects" className="hover:text-[var(--primary)]">Projects</Link>
          <Link to="/contacts" className="hover:text-[var(--primary)]">Contact</Link>
        </nav>
        
        {/* Центр — копирайт */}
        <p className="text-xs text-[var(--text-muted)] text-center">
          © 2025 Serhii Dev. Все права защищены.
        </p>

        {/* Правый блок — соцсети */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--primary-hover)] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--primary-hover)] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--primary-hover)] transition"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
