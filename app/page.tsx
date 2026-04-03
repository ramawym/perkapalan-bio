"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useFontSettings } from "./FontSettingsContext";
import AdminSettings from "./AdminSettings";

export default function Home() {
  const { data: session } = useSession();
  const { settings } = useFontSettings();
  
  const isAdmin = session?.user && (session.user as { isAdmin?: boolean }).isAdmin;

  return (
    <main className="min-h-screen bg-white text-black font-sans transition-all duration-700" style={{ fontFamily: settings.fontFamily, color: settings.textColor }}>
      {/* Navigation - Glassmorphism & Sharp Edges */}
      <nav className="fixed top-0 z-50 w-full px-8 py-6 flex justify-between items-center border-b border-secondary/15 glass-nav">
        <div className="text-2xl font-black tracking-tighter uppercase font-headline">
          Perkapalan-Bio
        </div>

        <div className="flex items-center gap-6">
          {session ? (
            <>
              <div className="hidden md:flex items-center">
                {/* Format nama disamakan persis dengan format di dalam card tim */}
                <span className="font-headline font-bold uppercase tracking-tighter text-lg leading-tight">
                  {session.user?.name}
                </span>
              </div>
              <button 
                onClick={() => signOut()}
                className="border border-red-500 text-red-500 px-6 py-2.5 text-xs font-bold uppercase hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 active:scale-95"
              >
                Logout
              </button>
            </>
          ) : (
            <button 
              onClick={() => signIn("google")}
              className="relative z-[100] flex items-center gap-3 bg-white text-black border border-secondary/30 shadow-sm px-6 py-2.5 hover:bg-gray-50 transition-all active:scale-95 cursor-pointer"
            >
              <Image sizes="(max-width: 768px) 100vw, 33vw" src="/google.png" width={20} height={20} alt="Google" />
              <span className="font-headline font-bold uppercase text-xs tracking-wide">
                Login with Google
              </span>
            </button>
          )}
        </div>
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
            {session 
              ? `Welkam bro ${session.user?.name?.split(' ')[0]}`
              : "hyyy kami dari kelompok Perkapalan"}
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

      {isAdmin && <AdminSettings />}

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
            © 2026 Perkapalan
          </div>
        </div>
      </footer>
    </main>
  );
}

const teamMembers = [
  { name: "Deltakristiano Kurniaputra", id: "2406425810" },
  { name: "Marco Imanuel", id: "2406411824" },
  { name: "Walyul'ahdi Maulana Ramadhan", id: "2406426012" }, 
  { name: "Nuril Izza Ahmady", id: "2406424814" },
  { name: "Sean Marcello Maheron", id: "2406401792" },
];