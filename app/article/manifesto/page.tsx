import { Header } from "@/components/layout/Header";
import { BridgeWidget } from "@/components/ui/BridgeWidget";
import { StickyFooter } from "@/components/ui/StickyFooter";

export default function ManifestoPage() {
    return (
        <main className="min-h-screen bg-black-main text-white">
            <Header />

            <article className="container mx-auto px-6 py-28 max-w-3xl">
                {/* Breadcrumb / Category */}
                <div className="flex items-center gap-2 text-sm text-gold mb-6 uppercase tracking-widest">
                    <span>Édito</span>
                    <span>•</span>
                    <span>Culture</span>
                </div>

                <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8">
                    Baydouvan : Pourquoi il est temps de prendre l&apos;avantage (et comment le faire)
                </h1>

                <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-8 text-sm text-white/60">
                    <span>Temps de lecture : 4 min</span>
                </div>

                <div className="prose prose-invert prose-lg prose-headings:font-serif prose-headings:text-gold prose-a:text-gold prose-strong:text-white">
                    <p className="lead text-xl text-white/90">
                        On dit souvent que le savoir est une arme. C&apos;est faux. Le savoir est une munition. L&apos;arme, c&apos;est l&apos;action. Bienvenue sur Baydouvan, le média de l&apos;excellence noire.
                    </p>

                    <p>
                        Si vous êtes ici, c&apos;est que vous refusez le rôle de spectateur. Vous sentez que l&apos;histoire s&apos;accélère. Baydouvan (« Mettre en avant » en créole) est né d&apos;une urgence : celle de réunir nos forces dispersées. Nous sommes les héritiers d&apos;une histoire millénaire, mais nous sommes surtout les architectes d&apos;un futur technologique et économique que nous devons bâtir nous-mêmes.
                    </p>

                    <h3>1. S&apos;ancrer pour s&apos;élever (Culture)</h3>
                    <p>
                        Comme le dit le proverbe : <em>« Plis ou monté, plis ou ka vwè fon larivié »</em> (Plus on monte, plus on voit le fond de la rivière). Notre culture n&apos;est pas un folklore, c&apos;est notre système d&apos;exploitation. Sur Baydouvan, nous explorerons comment la philosophie Ubuntu ou les innovations de l&apos;antiquité africaine nourrissent le leadership moderne.
                    </p>

                    <h3>2. Coder notre propre futur (Tech)</h3>
                    <p>
                        La technologie est le grand égalisateur. De l&apos;intelligence artificielle à la blockchain, l&apos;excellence noire est présente mais souvent invisible. Nous allons mettre en lumière ces talents pour vous prouver qu&apos;il n&apos;y a aucun plafond de verre que nous ne puissions briser.
                    </p>

                    <h3>3. Faire circuler la richesse (Économie)</h3>
                    <p>
                        C&apos;est ici que tout se joue. La fierté culturelle ne suffit pas si nos poches sont vides. Créer une communauté forte, c&apos;est créer un circuit économique où l&apos;argent circule entre nous avant de sortir.
                    </p>

                    <hr className="border-white/10 my-8" />

                    <p>
                        Cependant, lire des articles ne suffit pas. L&apos;inspiration sans transpiration est stérile. Nous avons créé ce média pour éclairer le chemin, mais nous avons créé un véhicule pour le parcourir : <strong className="text-tidjob-green">Tidjob Lokal</strong>.
                    </p>

                    <p>
                        Tidjob n&apos;est pas juste une application. C&apos;est notre infrastructure. C&apos;est l&apos;outil qui vous permet, dès aujourd&apos;hui, de trouver un plombier, un développeur ou un traiteur de la communauté.
                    </p>

                    <p>
                        Baydouvan éclaire. Tidjob construit. La renaissance a commencé. Allez-vous simplement la regarder, ou allez-vous y participer ?
                    </p>

                    {/* Bridge Widget Integration */}
                    <BridgeWidget />

                </div>
            </article>

            <StickyFooter />
        </main>
    );
}
