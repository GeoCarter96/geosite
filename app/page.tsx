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
       <h1 className="text-3xl font-black uppercase tracking-[0.25em] text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] mb-2">
  Geo
</h1>


        <p className="text-neutral-400 text-sm mb-8">Developer, Designer & Creator</p>

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
