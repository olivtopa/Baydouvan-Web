'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '../../utils/supabase/client';
import { signout } from '../../app/auth/actions';

export function AuthButton() {
    const [user, setUser] = useState<any>(null);
    const supabase = createClient();

    useEffect(() => {
        const checkUser = async () => {
            const { data } = await supabase.auth.getSession();
            setUser(data.session?.user || null);
        };
        checkUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (user) {
        return (
            <div className="flex items-center gap-4">
                <span className="text-[10px] md:text-xs text-[#00A86B] font-mono">
                    [ {user.user_metadata?.username || user.email?.split('@')[0]} ]
                </span>
                <form action={signout} className="hidden md:block">
                    <button className="text-xs font-bold tracking-widest uppercase text-white/50 hover:text-red-400 transition-colors">
                        Déconnexion
                    </button>
                </form>
            </div>
        );
    }

    return (
        <Link 
            href="/login" 
            className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] border border-[#D4AF37]/50 px-3 py-1 hover:bg-[#D4AF37] hover:text-black transition-colors shadow-[0_0_10px_rgba(212,175,55,0.2)]"
        >
            Connexion
        </Link>
    );
}
