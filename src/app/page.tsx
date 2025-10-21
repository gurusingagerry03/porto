import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      id: '1',
      title: 'Solo Traveler',
      category: 'Web App',
      description: 'Trip group chat',
      image: '/soloTravaler.png',
    },
    {
      id: '2',
      title: 'Abidis',
      category: 'E-commerce',
      description: 'E-commerce prototype',
      image: '/adidas.png',
    },
    {
      id: '3',
      title: '90 minutes',
      category: 'Web App',
      description: 'AI match insights',
      image: '/footbaal.png',
    },
    {
      id: '4',
      title: 'Zoogram',
      category: 'Mobile App',
      description: 'Pet social network',
      image: '/zoogram.png',
    },
  ];

  const skillColumns = [
    [
      { name: 'Python', icon: '🐍', color: 'bg-yellow-600' },
      { name: 'Next.js', icon: '▲', color: 'bg-black' },
      { name: 'Tailwind', icon: '💨', color: 'bg-cyan-500' },
    ],
    [
      { name: 'JavaScript', icon: 'JS', color: 'bg-yellow-500' },
      { name: 'AWS', icon: 'AWS', color: 'bg-orange-500' },
      { name: 'Node.js', icon: '🟢', color: 'bg-green-600' },
    ],
    [
      { name: 'TypeScript', icon: 'TS', color: 'bg-blue-600' },
      { name: 'Git', icon: 'Git', color: 'bg-gray-700' },
      { name: 'MongoDB', icon: '🍃', color: 'bg-green-500' },
    ],
    [
      { name: 'React', icon: '⚛️', color: 'bg-blue-500' },
      { name: 'Docker', icon: '🐳', color: 'bg-blue-400' },
      { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-700' },
    ],
    [
      { name: 'Vue.js', icon: 'V', color: 'bg-green-600' },
      { name: 'GraphQL', icon: 'GQL', color: 'bg-pink-600' },
      { name: 'Redis', icon: '⚡', color: 'bg-red-600' },
    ],
  ];

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
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-4 right-4 sm:top-6 sm:right-8 lg:top-8 lg:right-12 flex items-center gap-3 sm:gap-6 lg:gap-8 z-20">
        <Link
          href="https://www.instagram.com/gurusingagerry/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition-colors hover:bg-white/5"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </Link>
        <Link
          href="https://wa.me/6282165208976"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition-colors hover:bg-white/5"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/gerry-gurusinga-0950b7178/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition-colors hover:bg-white/5"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </Link>
        <Link
          href="https://github.com/gurusingagerry03"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition-colors hover:bg-white/5"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </Link>
      </nav>

      {/* QR Code Image - positioned below social icons */}
      <div className="hidden lg:block absolute top-32 right-12 z-5">
        <div className="relative w-110 h-110 rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm">
          <Image
            src="/coba.png"
            alt="QR Code"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pb-8 sm:pb-12 lg:pb-16 pt-20 sm:pt-24 lg:pt-30 max-w-[1400px]">
        {/* Hero Section */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-24">
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-gray-700/50 bg-gray-800 shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Gerry Gurusinga"
                width={144}
                height={144}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="pt-0 sm:pt-2 lg:pt-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-tight font-[family-name:var(--font-audiowide)]">
              GERRY GURUSINGA
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6">
              SOFTWARE DEVELOPER
            </p>
            <div className="flex gap-4">
              <Link
                target="_blank"
                href="mailto:imanuelgerry0303@gmail.com"
                className="px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-gray-500 hover:border-gray-400 rounded-lg text-xs sm:text-sm transition-all font-semibold tracking-wide hover:bg-white/5 flex items-center justify-center"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16 sm:mb-20 lg:mb-28">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-tight font-[family-name:var(--font-audiowide)]">
            PROJECTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Link key={index} href={`/projects/${project.id}`} className="group cursor-pointer">
                <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors font-[family-name:var(--font-audiowide)]">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Two Column Layout for Skills and About */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Skills Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-tight font-[family-name:var(--font-audiowide)]">
              SKILLS
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
              {skillColumns.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className="bg-gradient-to-b from-gray-800/40 to-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-xl sm:rounded-2xl p-2 sm:p-3 hover:border-gray-500/70 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                    {column.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center gap-1 sm:gap-2 group cursor-pointer"
                      >
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl ${skill.color} flex items-center justify-center text-white font-bold text-[10px] sm:text-xs group-hover:scale-110 transition-transform shadow-lg`}
                        >
                          {skill.icon}
                        </div>
                        <span className="text-[8px] sm:text-[10px] text-gray-300 text-center font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About Me Section */}
          <div>
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-700/40 rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 tracking-tight font-[family-name:var(--font-audiowide)]">
                ABOUT ME
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-5 font-light">
                Full-stack developer based in Jakarta. I’m comfortable across the stack and enjoy
                balancing frontend DX with backend reliability to ship clean, maintainable features.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-5 font-light">
                Tech I work with often: React/Next.js, React Native/Expo, Node.js/Express,
                PostgreSQL &amp; MongoDB, GraphQL/REST, Socket.IO, plus AI integrations (e.g.,
                Gemini) for insights and automation.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Recent projects include an Adidas-style e-commerce prototype, a football app with AI
                match insights, a solo-traveler app with real-time group chat, and a pet-focused
                social mobile app. I’m open to internship, junior, or freelance opportunities.
              </p>
            </div>
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
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-white rounded-full opacity-50"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-white rounded-full opacity-60"></div>
      </div>
    </div>
  );
}
