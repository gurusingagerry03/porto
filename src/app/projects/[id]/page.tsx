import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// Mock data - nanti bisa diganti dengan data dari database atau API
interface TechStack {
  name: string;
  icon: string;
  color: string;
}

interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
  techStack: TechStack[];
  features: string[];
  challenges: string[];
  timeline: string;
  role: string;
}

const projectsData: Record<string, ProjectData> = {
  '1': {
    id: '1',
    title: 'Solo Traveler',
    category: 'Web App',
    description: 'Trip group chat',
    fullDescription:
      'A solo-travel web app where users pick a trip package and are auto-joined into that package’s real-time group chat. Includes packing suggestions powered by AI and protected routes with JWT.',
    image: '/soloTravaler.png',
    githubUrl: 'https://github.com/orgs/Solo-Travel-App-HCK87/repositories',
    demoUrl: 'https://solo-travaler-c60bd.web.app/',
    techStack: [
      { name: 'React (Vite)', icon: '⚛️', color: 'bg-blue-500' },
      { name: 'Tailwind CSS', icon: '💨', color: 'bg-cyan-500' },
      { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-700' },
      { name: 'Socket.IO', icon: '🔌', color: 'bg-purple-500' },
      { name: 'JWT Auth', icon: '🔐', color: 'bg-gray-700' },
      { name: 'Gemini API', icon: '✨', color: 'bg-indigo-600' },
    ],
    features: [
      'Real-time group chat per package',
      'Protected routes with JWT',
      'AI packing suggestions',
      'Trip package management',
    ],
    challenges: [
      'Maintaining socket rooms per package',
      'Synchronizing server/client state',
      'Securing authenticated endpoints',
    ],
    timeline: '1 week',
    role: 'Full Stack Developer',
  },
  '2': {
    id: '2',
    title: 'Abidis',
    category: 'E-commerce',
    description: 'Adidas-style store',
    fullDescription:
      'An Adidas-inspired e-commerce prototype with catalog, PDP, filters, cart, and basic checkout. Built with Next.js and MongoDB with JWT-based authentication.',
    image: '/adidas.png',
    githubUrl: 'https://github.com/gurusingagerry03/abidis.git',
    demoUrl: 'https://abidis.vercel.app/',
    techStack: [
      { name: 'Next.js', icon: '▲', color: 'bg-black' },
      { name: 'TypeScript', icon: 'TS', color: 'bg-blue-600' },
      { name: 'React', icon: '⚛️', color: 'bg-blue-500' },
      { name: 'Tailwind CSS', icon: '💨', color: 'bg-cyan-500' },
      { name: 'MongoDB', icon: '🍃', color: 'bg-green-600' },
      { name: 'JWT Auth', icon: '🔐', color: 'bg-gray-700' },
    ],
    features: [
      'Responsive catalog & PDP',
      'Filters and search',
      'Cart & basic checkout',
      'JWT user sessions',
    ],
    challenges: [
      'Designing product schema',
      'Handling pagination & filters',
      'Securing cart operations',
    ],
    timeline: '1 week',
    role: 'Frontend Developer',
  },
  '3': {
    id: '3',
    title: '90 minutes',
    category: 'Web App',
    description: 'AI match insights',
    fullDescription:
      'A football web app featuring clubs, teams, matches, per-match summaries, and AI-generated predictions. Server integrates a third-party football API and Gemini for insights with Google OAuth for protected dashboards.',
    image: '/footbaal.png',
    githubUrl: 'https://github.com/gurusingagerry03/IP-HCK87.git',
    demoUrl: 'https://ninety-minutes-702e9.web.app/',
    techStack: [
      { name: 'React (Vite)', icon: '⚛️', color: 'bg-blue-500' },
      { name: 'Tailwind CSS', icon: '💨', color: 'bg-cyan-500' },
      { name: 'Node.js', icon: '🟢', color: 'bg-green-600' },
      { name: 'Express', icon: '🚏', color: 'bg-gray-800' },
      { name: 'Sequelize', icon: '🗃️', color: 'bg-slate-700' },
      { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-700' },
      { name: 'Google OAuth', icon: '🔑', color: 'bg-red-600' },
      { name: 'Gemini API', icon: '✨', color: 'bg-indigo-600' },
    ],
    features: [
      'Match summaries & standings',
      'AI predictions per match',
      'Protected admin dashboard',
      'Server-side football API integration',
    ],
    challenges: [
      'Normalizing third-party data',
      'Ensuring prediction latency',
      'OAuth + JWT session flow',
    ],
    timeline: '1 week',
    role: 'Full Stack Developer',
  },
  '4': {
    id: '4',
    title: 'Zoogram',
    category: 'Mobile App',
    description: 'Pet social network',
    fullDescription:
      'A React Native/Expo mobile app like Instagram for pets: pet profiles, media feed, and social interactions. Backend with MongoDB, Redis caching, and JWT authentication.',
    image: '/zoogram.png',
    githubUrl: 'https://github.com/gurusingagerry03/Zoogram.git',
    demoUrl:
      'https://expo.dev/preview/update?message=feat%3A+update+Apollo+client+URI+to+correct+endpoint+for+API+access&updateRuntimeVersion=1.0.0&createdAt=2025-10-20T14%3A25%3A58.395Z&slug=exp&projectId=5dc73bf8-3129-4153-9554-235008ae8b95&group=317da628-b1cb-48fa-8d2f-cccac90d8c2d ',
    techStack: [
      { name: 'React Native', icon: '📱', color: 'bg-blue-500' },
      { name: 'Expo', icon: '🟣', color: 'bg-purple-600' },
      { name: 'MongoDB', icon: '🍃', color: 'bg-green-600' },
      { name: 'Redis', icon: '🧠', color: 'bg-red-600' },
      { name: 'JWT Auth', icon: '🔐', color: 'bg-gray-700' },
    ],
    features: [
      'Pet profiles & feed',
      'Media upload & viewing',
      'Likes, comments, follows',
      'JWT-protected routes',
    ],
    challenges: [
      'Optimizing media pipeline',
      'State management across tabs',
      'Securing upload endpoints',
    ],
    timeline: '1 week',
    role: 'Full Stack Developer',
  },
  '5': {
    id: '5',
    title: 'Melodix',
    category: 'Mobile App',
    description: 'AI-powered music recognition app',
    fullDescription:
      'A React Native/Expo mobile app for music recognition and playlist management. Features Shazam-like audio recognition, concert discovery via Ticketmaster API, and Spotify/YouTube integration. Backend with MongoDB, Redis caching, and device-based authentication.',
    image: '/123.png',
    githubUrl: 'https://github.com/FINAL-PROJECT-HCK87/Final-Project-HCK87.git',
    demoUrl:
      'https://expo.dev/preview/update?message=fix%3A+update+color+for+delete+button+and+text+in+PlaylistDetailScreen%3B+add+expo-updates+dependency+in+package.json+and+package-lo&updateRuntimeVersion=1.0.0&createdAt=2025-10-21T07%3A12%3A16.708Z&slug=exp&projectId=521cf54a-2018-45de-bde6-dfa3bcb84b61&group=846a11b7-321b-4c9a-974c-b8fcf7d1f7fa ',
    techStack: [
      { name: 'React Native', icon: '📱', color: 'bg-blue-500' },
      { name: 'Expo', icon: '🟣', color: 'bg-purple-600' },
      { name: 'TypeScript', icon: '💠', color: 'bg-blue-600' },
      { name: 'MongoDB', icon: '🍃', color: 'bg-green-600' },
      { name: 'Shazam API', icon: '🎵', color: 'bg-indigo-600' },
      { name: 'Spotify API', icon: '🎧', color: 'bg-green-500' },
      { name: 'Ticketmaster', icon: '🎫', color: 'bg-cyan-600' },
    ],
    features: [
      'Audio/Video music recognition',
      'Search history management',
      'Playlist creation & sharing',
      'Artist concert information',
      'Spotify & YouTube integration',
      'Device-based authentication',
      'Top trending songs',
    ],
    challenges: [
      'Integrating multiple music APIs (Shazam, Spotify, YouTube)',
      'Implementing swipe-to-delete in playlists',
      'Managing shared playlists across devices',
      'Optimizing audio recognition performance',
    ],
    timeline: '2 weeks',
    role: 'Full Stack Developer',
  },
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projectsData[params.id];

  if (!project) {
    return {
      title: 'Project Not Found - Gerry Gurusinga',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.title} - Gerry Gurusinga`,
    description: project.fullDescription,
    keywords: [
      project.title,
      'Gerry Gurusinga',
      project.category,
      ...project.techStack.map((tech) => tech.name),
    ],
    authors: [{ name: 'Gerry Gurusinga' }],
    openGraph: {
      title: `${project.title} - Gerry Gurusinga`,
      description: project.fullDescription,
      type: 'website',
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Gerry Gurusinga`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData[params.id];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link
            href="/"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden font-sans">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/bgporto.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-8 sm:py-12 max-w-[1400px]">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6 sm:mb-8 group"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm sm:text-base font-semibold">Back to Portfolio</span>
        </Link>

        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-xs sm:text-sm font-semibold">
              {project.category}
            </span>
            <span className="text-gray-400 text-xs sm:text-sm">• {project.timeline}</span>
            <span className="text-gray-400 text-xs sm:text-sm">• {project.role}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight font-[family-name:var(--font-audiowide)]">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl">
            {project.fullDescription}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all flex items-center gap-2 group"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            VIEW LIVE DEMO
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 border-2 border-gray-500 hover:border-gray-400 rounded-lg text-xs sm:text-sm font-semibold tracking-wide hover:bg-white/5 transition-all flex items-center gap-2 group"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            VIEW ON GITHUB
          </a>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Project Image */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-xl sm:rounded-2xl overflow-hidden hover:border-gray-500/70 transition-all duration-300 shadow-2xl h-full">
              <div className="relative w-full h-full bg-gray-900 flex items-center justify-center min-h-[250px] sm:min-h-[400px] lg:min-h-[540px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-700/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-2xl h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 tracking-tight font-[family-name:var(--font-audiowide)] flex items-center gap-2">
                <span className="text-blue-400">⚡</span>
                TECH STACK
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {project.techStack.map((tech: TechStack, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-800/40 rounded-lg sm:rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all group cursor-pointer hover:scale-105"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg ${tech.color} flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg group-hover:shadow-xl transition-all`}
                    >
                      {tech.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs text-gray-300 text-center font-medium group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features and Challenges - Single Card */}
        <div className="mb-8 sm:mb-12">
          <div className="relative bg-gradient-to-br from-gray-800/60 via-gray-900/70 to-black/80 border border-gray-700/50 sm:border-2 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

            {/* Content Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {/* Key Features */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                    <span className="text-xl sm:text-2xl">✨</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight font-[family-name:var(--font-audiowide)] bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    KEY FEATURES
                  </h3>
                </div>

                <ul className="space-y-3 sm:space-y-4">
                  {project.features.map((feature: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 sm:gap-4 group hover:translate-x-2 transition-all duration-300"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg shadow-blue-500/30">
                        <span className="text-white text-[10px] sm:text-xs font-bold">✓</span>
                      </div>
                      <span className="text-xs sm:text-sm leading-relaxed text-gray-300 group-hover:text-white transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vertical Divider */}
              <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>

              {/* Challenges */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <span className="text-xl sm:text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight font-[family-name:var(--font-audiowide)] bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    CHALLENGES
                  </h3>
                </div>

                <ul className="space-y-3 sm:space-y-4">
                  {project.challenges.map((challenge: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 sm:gap-4 group hover:translate-x-2 transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex-shrink-0 group-hover:scale-150 transition-all shadow-lg shadow-orange-500/50"></div>
                      <span className="text-xs sm:text-sm leading-relaxed text-gray-300 group-hover:text-white transition-colors">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Decorative Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Decorative Stars */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-40 left-1/4 w-1 h-1 bg-white rounded-full opacity-40"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full opacity-50"></div>
        <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute bottom-60 right-1/4 w-1 h-1 bg-white rounded-full opacity-40"></div>
      </div>
    </div>
  );
}
