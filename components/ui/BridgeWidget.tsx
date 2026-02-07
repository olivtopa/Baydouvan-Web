import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const BridgeWidget = () => {
    return (
        <div className="my-8 rounded-lg border border-gold bg-zinc-900 p-6 text-white shadow-lg">
            <div className="flex flex-col items-center text-center">
                <p className="mb-2 text-lg font-bold">Vous avez aimé cet article ?</p>
                <p className="mb-6 text-sm md:text-base">
                    Ne vous contentez pas de lire. Soutenez l&apos;économie de la communauté dès maintenant.
                    <br />
                    Chaque euro dépensé chez un professionnel noir est un euro investi dans notre avenir.
                </p>

                <Link
                    href="https://tidjob.com"
                    target="_blank"
                    className="group/btn flex items-center gap-2 rounded-full border border-gold bg-black-main px-6 py-3 font-bold text-gold transition-all hover:bg-gold hover:text-black-main hover:scale-105"
                >
                    Trouver un pro sur Tidjob
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Link>
            </div>
        </div>
    );
};
