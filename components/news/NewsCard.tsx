import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { NewsItem } from "@/data/newsData";

interface NewsCardProps {
    item: NewsItem;
}

export const NewsCard = ({ item }: NewsCardProps) => {
    const [imgSrc, setImgSrc] = useState(item.imageUrl);
    const [hasError, setHasError] = useState(false);

    // Reset state when item changes
    useEffect(() => {
        setImgSrc(item.imageUrl);
        setHasError(false);
    }, [item.imageUrl]);

    const fallbackImage = "https://placehold.co/600x400/18181b/D4AF37/png?text=Visuel+Non+Disponible&font=montserrat";

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-lg transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-gold/10">
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
                <Image
                    src={hasError ? fallbackImage : imgSrc}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => {
                        if (!hasError) {
                            setHasError(true);
                            setImgSrc(fallbackImage);
                        }
                    }}
                    unoptimized={hasError} // Skip optimization for external placeholder
                />

                {/* Category Badge */}
                <div className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-bold text-black-main shadow-md">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                {/* Metadata */}
                <div className="mb-3 flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gold">
                        <Tag className="h-3 w-3" />
                        <span>{item.source}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold leading-tight text-white group-hover:text-gold transition-colors">
                    {item.title}
                </h3>

                {/* Summary */}
                <p className="mb-6 line-clamp-3 text-sm text-gray-300">
                    {item.summary}
                </p>

                {/* Footer Link */}
                <div className="mt-auto">
                    <Link
                        href={item.videoUrl}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm font-bold text-gold transition-all group-hover:gap-3"
                    >
                        Lire l&apos;article
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
