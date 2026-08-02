import Image from 'next/image'; // Import Next.js Image instead

interface LinkItem {
  label: string;
  url: string;
}

const LINKS: LinkItem[] = [
  { label: 'Instagram', url: 'https://instagram.com/feelsoregal' },
  { label: 'TikTok', url: 'https://tiktok.com/@feelsoregal' },

  { label: 'Let Me Build Your Website', url: 'https://thatwebcreator.com' },
];

export default function Home() {
  return (
    <main className="relative min-h-screen text-white flex flex-col items-center justify-center p-6">
      {/* Inline full-screen background image markup */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Image
          src="/me.jpeg"
          alt="Background Image"
          fill
          priority
          sizes="100vw"
          className="object-cover "
        />
      </div>

      <div className="w-full max-w-md mx-auto text-center flex flex-col items-center">
        {/* User Identity Details */}
     <h1 className="group text-4xl font-black uppercase tracking-[0.25em] mb-3 cursor-default select-none transition-all duration-500 hover:tracking-[0.35em]">
  <span className="bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 bg-clip-text text-transparent transition-all duration-500 group-hover:from-cyan-400 group-hover:via-emerald-400 group-hover:to-amber-400 drop-shadow-[0_0_15px_rgba(244,63,94,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]">
    Geo
  </span>
</h1>



        <p className="font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-fuchsia-500 text-sm mb-8 drop-shadow-[0_2px_10px_rgba(6,182,212,0.15)]">
  Developer, Designer & Creator
</p>


        {/* Links Navigation Stack */}
        <nav className="w-full space-y-4">
          {LINKS.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 bg-white/10  border border-white/10 rounded-xl font-medium tracking-wide transition-all hover:bg-white/20 hover:scale-[1.02] hover:border-white/30 active:scale-[0.98]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
