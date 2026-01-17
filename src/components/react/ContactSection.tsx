import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function ContactSection() {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    alert(translations.contact.success);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contacto"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-4">
          {translations.contact.title}
        </h2>
        <p className="text-center text-black/70 dark:text-white/70 mb-16 max-w-2xl mx-auto">
          {translations.contact.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                {translations.contact.info.title}
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:contacto@ejemplo.com"
                  className="flex items-center gap-4 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span>contacto@ejemplo.com</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black dark:text-white mb-2"
              >
                {translations.contact.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black/20 dark:border-white/20 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                placeholder={translations.contact.form.namePlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black dark:text-white mb-2"
              >
                {translations.contact.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black/20 dark:border-white/20 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                placeholder={translations.contact.form.emailPlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-black dark:text-white mb-2"
              >
                {translations.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-black/20 dark:border-white/20 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors resize-none"
                placeholder={translations.contact.form.messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-blue-600 dark:hover:bg-blue-400 transition-colors"
            >
              <Send className="w-5 h-5" />
              {translations.contact.form.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
