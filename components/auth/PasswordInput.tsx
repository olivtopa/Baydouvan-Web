'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordInputProps {
    name: string;
    placeholder?: string;
    required?: boolean;
}

export function PasswordInput({ name, placeholder = "••••••••", required = false }: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative mb-6">
            <input
                className="w-full rounded-none border border-white/20 bg-black/50 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                type={showPassword ? "text" : "password"}
                name={name}
                placeholder={placeholder}
                required={required}
            />
            <button
                type="button"
                className="absolute right-4 top-[50%] -translate-y-[50%] text-white/50 hover:text-white transition-colors"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Cacher le mot de passe" : "Afficher le mot de passe"}
            >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
    );
}
