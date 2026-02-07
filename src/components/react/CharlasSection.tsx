import { useLanguage } from '../../hooks/useLanguage';
import TalksBentoGrid from './ui/talks-bento-grid';

interface Talk {
  id: string;
  title: string;
  event: string;
  date: string;
  url?: string;
  img?: string;
  type: 'attended' | 'speaker' | 'workshop' | 'podcast';
}

const talks: Talk[] = [
  {
    id: '1',
    title: 'De Flutter al Mundo: Un Roadmap Acelerado con IA como Aliada',
    event: 'GDG DevFest',
    date: 'Noviembre 2025',
    url: 'https://www.gdgecuador.com/',
    type: 'speaker',
  },
  {
    id: '2',
    title: 'Apps que ven: Integrando Flutter con AWS Textract para resolver problemas reales',
    event: 'AWS Community Day 2025',
    date: 'Octubre 2025',
    url: 'https://day.awscommunity.ec/',
    type: 'speaker',
  },
  {
    id: '3',
    title: 'Construyendo productos sin dejarme la vida en el intento',
    event: 'DevLokos Potcast 2025',
    date: 'Julio 2025',
    url: 'https://www.youtube.com/watch?v=nUD4oFAPFJY',
    type: 'podcast',
  },
  {
    id: '4',
    title: 'Ep. 15 - El Camino del Desarrollador Flutter: Retos, IA y Producción',
    event: 'Oceano de datos Podcast',
    date: 'Agosto 2025',
    url: 'https://www.youtube.com/watch?v=5y1yf394hk4',
    type: 'podcast',
  },
  {
    id: '5',
    title: 'IA COMO COPILOTO: Mejorando el Diseño de Experiencia de Usuario con Cristhian Recalde.',
    event: 'Conference HerUX',
    date: 'Septiembre 2025',
    url:"https://www.youtube.com/watch?v=DK0phi0SVSQ",
    type: 'workshop',
  },
  {
    id: '6',
    title: 'Crea una app completa en una semana',
    event: 'ITSI Talleres Academicos Virtuales',
    date: 'Agosto 2025',
    url: 'https://www.youtube.com/post/UgkxT2UeHx-VgzQngylVUeZrz6PHyYHhujm_',
    type: 'workshop',
  },
  {
    id: '7',
    title: 'Crea tu primera app con IA en Flutter...sin saber machine learning',
    event: 'Code On 2025',
    date: 'Octubre 2025',
    url: 'https://www.instagram.com/p/DPezC4Xk2wM/',
    type: 'speaker',
  },
  {
    id: '8',
    title: 'Flutter y la IA: De Ibarra al Mundo',
    event: 'Flisol Guayaquil 2025',
    date: 'Junio 2025',
    url: 'https://flisolguayaquil.org/',
    type: 'speaker',
  },
  {
    id: '9',
    title: 'Tecnología y Sociedad, la IA y su impacto en el desarrollo de software',
    event: 'ADS Podcast ',
    date: 'Diciembre 2025',
    url: 'https://www.facebook.com/share/p/1ALEyHRRMK/',
    type: 'speaker',
  },
  {
    id: '10',
    title: 'Flutter Conf Latam',
    event: 'Flutter Conf 2025',
    date: 'Septiembre 2025',
    url: 'https://flutterconflatam.dev/home',
    type: 'attended',
  },
];

export default function CharlasSection() {
  const { translations } = useLanguage();

  return (
    <section
      id="charlas"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-4 transition-colors duration-300">
          {translations.talks.title}
        </h2>
        <p className="text-center text-black/70 dark:text-white/70 mb-16 max-w-2xl mx-auto transition-colors duration-300">
          {translations.talks.description}
        </p>

        <TalksBentoGrid talks={talks} />
      </div>
    </section>
  );
}
