"use client";

import { motion } from "framer-motion";
import { BookOpen, Compass, Shield } from "lucide-react";

const CHALLENGES = [
  {
    id: 1,
    title: "Explorer 1 mythe",
    description: "Découvre une nouvelle légende dans les archives.",
    reward: "50 XP",
    icon: BookOpen,
    completed: false,
    color: "from-[#D4AF37] to-amber-700"
  },
  {
    id: 2,
    title: "Trouver 1 artefact",
    description: "Résous une énigme sur la carte interactive.",
    reward: "1 Artefact",
    icon: Compass,
    completed: true,
    color: "from-[#00A86B] to-emerald-900"
  },
  {
    id: 3,
    title: "Session Gardien",
    description: "Connecte-toi 3 jours de suite.",
    reward: "Titre d'Initié",
    icon: Shield,
    completed: false,
    color: "from-purple-500 to-indigo-900"
  }
];

export function DailyChallenges() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="w-full max-w-sm"
    >
      <div className="bg-black/40 backdrop-blur-md border border-[#D4AF37]/20 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <h3 className="text-[#D4AF37] font-serif uppercase tracking-widest text-sm mb-4 flex items-center justify-between">
          <span>Défis du Jour</span>
          <span className="text-xs text-[#00A86B] font-sans">02:14:59 restantes</span>
        </h3>
        
        <div className="space-y-3">
          {CHALLENGES.map((challenge, index) => (
            <motion.div 
              key={challenge.id}
              whileHover={{ scale: 1.02, x: 5 }}
              className={`relative overflow-hidden group p-3 rounded-xl border transition-all duration-300 ${
                challenge.completed 
                  ? 'bg-black/60 border-[#00A86B]/30' 
                  : 'bg-black/60 border-white/10 hover:border-[#D4AF37]/50 hover:bg-black/80'
              }`}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${challenge.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex items-center gap-4">
                <div className={`p-2 rounded-lg ${challenge.completed ? 'bg-[#00A86B]/20 text-[#00A86B]' : 'bg-white/5 text-[#D4AF37]'}`}>
                  <challenge.icon size={20} />
                </div>
                
                <div className="flex-1">
                  <h4 className={`text-sm font-bold ${challenge.completed ? 'text-gray-400 line-through' : 'text-white'}`}>
                    {challenge.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{challenge.description}</p>
                </div>

                <div className="shrink-0 text-right">
                  <span className={`text-xs font-bold ${challenge.completed ? 'text-[#00A86B]' : 'text-[#D4AF37]'}`}>
                    {challenge.completed ? 'Complété' : challenge.reward}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
