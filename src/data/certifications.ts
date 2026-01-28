export interface Certification {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  credentialId?: string;
  url?: string;
  description?: string;
  icon?: string;
}

export const allCertifications: Certification[] = [
  {
    id: '1',
    title: 'Microsoft Certified AZ-900: Azure AI Fundamentals',
    issuer: 'Microsoft',
    icon: 'logos:microsoft-icon',
    url: 'https://learn.microsoft.com/api/credentials/share/es-es/CristhianRecalde-4665/10D25DF28F252BB7?sharingId=A2098A03866B3733',
    description:
      'Certificación en fundamentos de Azure e inteligencia artificial: servicios en la nube, arquitectura de soluciones, seguridad, gestión de recursos y conceptos de IA en Microsoft.',
  },
  {
    id: '2',
    title: 'Development Web II',
    issuer: 'Google',
    icon: 'logos:google-icon',
    url: 'https://drive.google.com/file/d/1Pg0lJnZtYOdj2Rv4q5SZsnA9ieFsBtm2/view?usp=sharing',
    description:
      'Desarrollo web con HTML, CSS, JavaScript y buenas prácticas. Cobertura de estructuras, estilos, interactividad y fundamentos de SEO.',
  },
  {
    id: '3',
    title: 'Diseño Web con HTML5 y CSS3',
    issuer: 'Movistar',
    icon: 'cbi:movistar-plus',
    url: 'https://drive.google.com/file/d/1s5PNJ8tnrnGJX66TqLs8ZWoCDnfUwMpD/view?usp=sharing',
    description:
      'Maquetación y diseño web moderno con HTML5 y CSS3: semántica, layouts flexibles, animaciones y diseño responsive.',
  },
  {
    id: '4',
    title: 'Administración Windows Server 2016',
    issuer: 'Udemy',
    icon: 'logos:udemy-icon',
    url: 'https://drive.google.com/file/d/17DjdcP5cJCeFaJCk7IUUrXv-An8SK59B/view?usp=sharing',
    description:
      'Instalación, configuración y administración de Windows Server 2016: Active Directory, DNS, DHCP, permisos y gestión de roles.',
  },
  {
    id: '5',
    title: 'VueJs 3 - Desde 0',
    issuer: 'Udemy',
    icon: 'logos:udemy-icon',
    url: 'https://drive.google.com/file/d/1SSqaYjPIGwO9LCkHOwUOZB4r7Yh6OIYE/view?usp=sharing',
    description:
      'Desarrollo frontend con Vue 3: Composition API, componentes reactivos, gestión de estado y mejores prácticas del ecosistema Vue.',
  },
  {
    id: '6',
    title: 'Canva 2021',
    issuer: 'Canva',
    icon: 'devicon:canva',
    url: 'https://drive.google.com/file/d/1XFul-8MKenI9U5yEAXVI1wfU2M9LE0xc/view?usp=sharing',
    description:
      'Herramientas de diseño gráfico y creación de contenido visual con Canva: plantillas, tipografía, ilustraciones y publicación.',
  },
  {
    id: '7',
    title: 'Canva 2022 - Diseño Gráfico desde 0',
    issuer: 'Canva',
    icon: 'devicon:canva',
    url: 'https://drive.google.com/file/d/15-w-aXigZS3A5ntW90r8cBZ5HCLQullv/view?usp=sharing',
    description:
      'Diseño gráfico desde cero: composición, layouts, tipografía, color y branding. Creación de piezas para redes y marketing.',
  },
  {
    id: '8',
    title: 'Certificación Dominio Inglés B1',
    icon: 'token:efi',
    url: 'https://drive.google.com/file/d/1hLRlziymerWufhFDStiAXyZ-5MzAQceo/view?usp=sharing',
    description:
      'Acreditación de nivel B1 de inglés según el Marco Común Europeo de Referencia: comprensión y expresión escrita y oral.',
  },
  {
    id: '9',
    title: 'Finanzas Inclusivas y Gobernanza',
    icon: 'marketeq:bank',
    url: 'https://drive.google.com/file/d/1SILN0o1_9j0vGyIGpW9Bw8vMoojG0ZuD/view?usp=sharing',
    description:
      'Finanzas inclusivas, gobernanza corporativa y servicios financieros accesibles. Marcos regulatorios y buenas prácticas.',
  },
  {
    id: '10',
    title: 'The Complete Google Chrome Extensions Developer Course',
    issuer: 'Udemy',
    icon: 'logos:udemy-icon',
    url: 'https://drive.google.com/file/d/1xj1ym_F29XURBNyC-dzIFR2cWtL7e1hL/view?usp=sharing',
    description:
      'Desarrollo de extensiones para Google Chrome: Manifest V3, APIs de Chrome, almacenamiento, permisos y publicación en la Chrome Web Store.',
  },
  {
    id: '11',
    title: 'Cisco Security Cibernetics',
    issuer: 'Cisco',
    icon: 'simple-icons:cisco',
    url: 'https://drive.google.com/file/d/1JIQnpAAYXDI7NSi4Kw5Za_T433vXCSGy/view?usp=sharing',
    description:
      'Seguridad cibernética y redes con enfoque Cisco: amenazas, defensa perimetral, firewalls y fundamentos de infraestructura segura.',
  },
  {
    id: '12',
    title: 'Ciberseguridad en el Teletrabajo',
    issuer: 'Google',
    icon: 'logos:google-icon',
    url: 'https://drive.google.com/file/d/1qjoIofi6Nv-dxJOlE_uhweCsKgdPiRTh/view?usp=sharing',
    description:
      'Buenas prácticas de ciberseguridad en entornos de teletrabajo: VPN, autenticación, protección de datos y concienciación.',
  },
  {
    id: '13',
    title: 'IBM Optimization IBM CPLEX',
    issuer: 'IBM',
    icon: 'cib:ibm',
    url: 'https://drive.google.com/file/d/1iyLXRtB-1nmdipUvaerSAaO2HgwE4nvr/view?usp=sharing',
    description:
      'Optimización y programación lineal con IBM ILOG CPLEX: modelado, resolución de problemas y aplicaciones en logística y planificación.',
  },
  {
    id: '14',
    title: 'Curso Completo de Computación',
    issuer: 'Udemy',
    icon: 'logos:udemy-icon',
    url: 'https://drive.google.com/file/d/1nQgOLRjO5TDWXe5qW1mf0f72-UmhBpRj/view?usp=sharing',
    description:
      'Fundamentos de computación, ofimática y uso de PC: sistema operativo, paquetes de oficina, internet y productividad digital.',
  },
  {
    id: '15',
    title: 'Hacking Ético de redes WiFi',
    issuer: 'HackerRank',
    icon: 'cib:hackerrank',
    url: 'https://drive.google.com/file/d/1jf8d3kpZQ5z_1XJEH4eMMeuMcoGKUq0V/view?usp=sharing',
    description:
      'Auditoría y seguridad de redes inalámbricas desde una perspectiva ética: análisis de vulnerabilidades, hardening y buenas prácticas.',
  },
  {
    id: '16',
    title: 'Python Guide Complete',
    issuer: 'Udemy',
    icon: 'logos:udemy-icon',
    url: 'https://drive.google.com/file/d/13161HvvjKgpNJjCX_ynbGjgwiX8iD81n/view?usp=sharing',
    description:
      'Programación en Python: sintaxis, estructuras de datos, POO, manejo de archivos y buenas prácticas para desarrollo y scripting.',
  },
  {
    id: '17',
    title: 'Unesco IA Certificate',
    issuer: 'UNESCO',
    icon: 'flag:un-1x1',
    url: 'https://drive.google.com/file/d/1jyAMjhspcFqi5fYIKF2L9ude47x8SvDc/view?usp=sharing',
    description:
      'Inteligencia artificial según UNESCO: IA generativa, IA aplicada e IA responsable. Ética, sesgos y uso sostenible de la tecnología.',
  },
  {
    id: '18',
    title: 'Curso Completo de Windows 10/11',
    issuer: 'Udemy',
    icon: 'logos:udemy-icon',
    url: 'https://drive.google.com/file/d/1CqoH3ZpovkhvbrtxoVtkL1UpkUOMJLf2/view?usp=sharing',
    description:
      'Administración, configuración y productividad en Windows 10 y 11: sistema de archivos, seguridad, actualizaciones y optimización.',
  },
];

export const featuredCertifications = allCertifications.slice(0, 3);
