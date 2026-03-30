import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation - Glassmorphism & Sharp Edges */}
      <nav className="fixed top-0 z-50 w-full px-8 py-6 flex justify-between items-center border-b border-secondary/15 glass-nav">
        <div className="text-2xl font-black tracking-tighter uppercase font-headline">
          Perkapalan-Bio
        </div>
        <div className="hidden md:flex items-center space-x-12 font-headline font-bold uppercase text-[10px] tracking-[0.2em]">
          {/* <a href="#" className="border-b-2 border-primary pb-1">Team</a> */}
        </div>
        <button className="flex items-center gap-3 bg-white border border-outline-variant px-5 py-2 hover:bg-surface-container-low transition-all active:scale-95">
          <Image src="/google.png" width={18} height={18} alt="Google" />
          <span className="font-headline font-bold uppercase text-[10px] tracking-tighter">
            Login with Google
          </span>
        </button>
      </nav>

      {/* Hero Section - Editorial Asymmetry */}
      <section className="px-8 md:px-24 pt-64 pb-32 min-h-[70vh] flex flex-col justify-center">
        <div className="max-w-4xl">
          <h1 className="font-headline text-7xl md:text-[120px] font-extrabold tracking-tighter leading-[0.85] mb-16">
            Perkapalan
            <br />
            Bio-TK2
          </h1>
          <p className="text-secondary text-xl md:text-2xl max-w-xl leading-relaxed font-body">
            hyyy kami dari kelompok Perkapalan
          </p>
        </div>
      </section>

      {/* Team Section - Tonal Layering & Grid */}
      <section className="bg-surface-container-low px-8 md:px-24 py-40">
        <div className="mb-20">
          <span className="font-body text-[10px] uppercase tracking-[0.4em] font-bold text-secondary block mb-4">
            Biodata
          </span>
          <h2 className="font-headline text-6xl font-extrabold tracking-tighter">
            Anggota Kelompok Perkapalan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-t border-secondary/10">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="bg-surface p-8 border-r border-b border-secondary/10 group hover:bg-primary-container hover:text-white transition-all duration-500"
            >
              <div className="relative aspect-[3/4] mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden bg-gray-200">
                <Image
                  src={`/team/${index}.jpg`}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-headline font-bold uppercase tracking-tighter text-lg leading-tight mb-4">
                {member.name}
              </h3>
              <div className="font-mono text-[10px] opacity-60 uppercase tracking-widest">
                ID: {member.id}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer - The Midnight Luster */}
      <footer className="bg-primary-container py-24 px-8 md:px-24 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-6">
            <div className="text-xl font-bold font-headline uppercase tracking-tighter">
              Perkapalan-Bio
            </div>
            <div className="font-body text-[10px] uppercase tracking-[0.2em] opacity-60">
              Universitas Indonesia - Fakultas Ilmu Komputer
            </div>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-body text-[9px] uppercase tracking-[0.4em] text-secondary">
            © 2024 Perkapalan
          </div>
        </div>
      </footer>
    </main>
  );
}

const teamMembers = [
  { name: "Deltakristiano Kurniaputra", id: "2406425810" },
  { name: "Marco Imanuel", id: "2406411824" },
  { name: "Walyul'ahdi Maulana Ramadhan", id: "2406426012" }, // Your NPM
  { name: "Nuril Izza Ahmady", id: "2406424814" },
  { name: "Sean Marcello Maheron", id: "2406401792" },
];
