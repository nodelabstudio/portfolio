import bidstrocityImage from '../assets/images/bidstrocity.png';
import cctImage from '../assets/images/cct_screen.png';
import mibraryImage from '../assets/images/mibrary_screen.png';
import battleshipImage from '../assets/images/battleship_screen.png';
import mapattackImage from '../assets/images/mapattack.png';
import knightTravailsImage from '../assets/images/knightstravails.png';
import santaCarlaSurfImage from '../assets/images/santa-carla-surf-home.png';

const projects = [
  {
    id: 1,
    title: 'Case Crime Trace',
    description:
      'A crime reporting and tracking platform that gives citizens a way to efficiently report and track local crimes. Built with Django, it includes user authentication, real-time updates, and suspect reporting features. The app is fronted by Cloudflare for SSL, caching, and DDoS protection, with the backend hosted on Railway.',
    shortDescription:
      'Crime reporting and tracking platform with real-time updates and community safety features.',
    image: cctImage,
    alt: 'Screenshot of Case Crime Trace Django app interface',
    live: 'https://crimetrace.online/',
    github: 'https://github.com/angelr1076/django-cct',
    featured: true,
    techTags: ['Python', 'Django', 'JavaScript', 'Cloudflare'],
  },
  {
    id: 2,
    title: 'Mibrary',
    description:
      'A personal library management app for organizing books and posting rich-text reviews. Built with Django, it integrates CKEditor for content creation and Cloudinary for image hosting. Served through Cloudflare with DDoS protection, reverse-proxied to Railway.',
    shortDescription:
      'Personal library management with rich-text reviews and cloud image hosting.',
    image: mibraryImage,
    alt: 'Screenshot of Mibrary Django library management app',
    live: 'https://mibrary.online/',
    github: 'https://github.com/angelr1076/django-mibrary',
    featured: true,
    techTags: ['Python', 'Django', 'JavaScript', 'Cloudinary'],
  },
  {
    id: 3,
    title: 'Map Sync Pro',
    description:
      'A geospatial mapping tool that combines user-specific data with HERE Maps technologies for geographic and demographic visualization. Built to integrate user datasets with interactive mapping for analysis and insight.',
    shortDescription:
      'Geospatial mapping tool combining user data with HERE Maps for visual analysis.',
    image:
      'https://res.cloudinary.com/angelrodriguez/image/upload/v1703191479/portfolio_2023/mapsyncshot.png',
    alt: 'Screenshot of Map Sync Pro geospatial mapping tool',
    live: 'https://mapsyncpro.pages.dev/',
    github: 'https://github.com/angelr1076/MapSyncPro',
    featured: true,
    techTags: ['JavaScript', 'HERE Maps API'],
  },
  {
    id: 4,
    title: 'Bidstrocity',
    description:
      'An eBay-like auction platform where users can create, manage, and bid on listings with commenting and watchlist features. Fronted by Cloudflare with the backend on Railway.',
    shortDescription:
      'Auction platform with bidding, watchlists, and commenting features.',
    image: bidstrocityImage,
    alt: 'Screenshot of Bidstrocity Django auction site',
    live: 'https://bidstrocity.online/',
    github: 'https://github.com/angelr1076/commerce',
    featured: false,
    techTags: ['Python', 'Django'],
  },
  {
    id: 5,
    title: 'Battleship',
    description:
      'Classic Battleship game with a smart AI opponent, factory functions, Webpack module bundling, and Jest testing.',
    shortDescription:
      'Classic game with smart AI, modular design, and full test coverage.',
    image: battleshipImage,
    alt: 'Screenshot of Battleship JavaScript game board',
    live: 'https://battleship-boom.pages.dev/',
    github: 'https://github.com/angelr1076/Battleship',
    featured: false,
    techTags: ['JavaScript', 'Jest', 'Webpack'],
  },
  {
    id: 6,
    title: 'Map Attack',
    description:
      'A remastered interactive game using Google Maps API with modularized functions and responsive design.',
    shortDescription:
      'Interactive Google Maps game with modular architecture.',
    image: mapattackImage,
    alt: 'Screenshot of Map Attack interactive Google Maps game',
    live: 'https://mapattackremastered.pages.dev/',
    github: 'https://github.com/angelr1076/MapAttackRemastered',
    featured: false,
    techTags: ['JavaScript', 'Google Maps API'],
  },
  {
    id: 7,
    title: "Knight's Travails",
    description:
      'A chess knight pathfinding visualizer using Breadth-First Search to find the shortest route on an 8x8 board.',
    shortDescription: 'BFS pathfinding visualizer for chess knight movement.',
    image: knightTravailsImage,
    alt: "Screenshot of Knight's Travails chess algorithm visualizer",
    live: 'https://angelr1076.github.io/Knight-Travails/',
    github: 'https://github.com/angelr1076/Knight-Travails',
    featured: false,
    techTags: ['JavaScript'],
  },
  {
    id: 8,
    title: 'React Shopping Cart',
    description:
      'An e-commerce storefront using React Context API for state management and React Router for navigation.',
    shortDescription: 'E-commerce app with Context API state management.',
    image: santaCarlaSurfImage,
    alt: 'Screenshot of React Shopping Cart project home page',
    live: 'https://santa-carla-surf.pages.dev/',
    github:
      'https://github.com/angelr1076/React-Shopping-Cart?tab=readme-ov-file',
    featured: false,
    techTags: ['React', 'Vite'],
  },
];

export default projects;
