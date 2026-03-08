import Link from 'next/link'
import { login, signup } from '../auth/actions'
import { PasswordInput } from '../../components/auth/PasswordInput'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mx-auto min-h-screen">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-white/50 bg-[#0F2A44]/30 hover:bg-[#0F2A44] flex items-center group text-sm font-bold tracking-widest uppercase"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Retour
      </Link>

      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-4 text-white">
        
        <h1 className="text-3xl font-black uppercase tracking-widest mb-6 font-serif text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
            Accès Mémoire
        </h1>
        
        <p className="text-white/60 text-sm mb-4">
            Connectez-vous pour sauvegarder votre progression sur le réseau global ou créez une nouvelle archive.
        </p>

        <label className="text-xs font-bold tracking-widest uppercase text-[#00A86B]" htmlFor="username">
          Nom de Gardien (Pour l'inscription)
        </label>
        <input
          className="rounded-none border border-white/20 bg-black/50 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.2)] mb-2"
          name="username"
          placeholder="Ex: Initié_Z01"
          required
        />

        <label className="text-xs font-bold tracking-widest uppercase text-[#00A86B]" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-none border border-white/20 bg-black/50 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.2)] mb-2"
          name="email"
          placeholder="votre@email.com"
          required
        />
        
        <label className="text-xs font-bold tracking-widest uppercase text-[#00A86B]" htmlFor="password">
          Mot de passe secret
        </label>
        <PasswordInput name="password" required />
        
        <div className="flex flex-col gap-4">
            <button
                formAction={login}
                className="bg-[#00A86B]/20 border border-[#00A86B] text-[#00A86B] hover:bg-[#00A86B] hover:text-black font-bold uppercase tracking-widest py-3 px-4 transition-all"
            >
                Me Connecter
            </button>
            <button
                formAction={signup}
                className="bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold uppercase tracking-widest py-3 px-4 transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
                Nouvelle Archive (Inscription)
            </button>
        </div>
        
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-red-900/30 text-red-400 text-center border border-red-500/50 text-sm font-bold tracking-widest uppercase">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  )
}
