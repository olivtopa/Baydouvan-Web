import { NewsItem } from "@/data/newsData";
import { NewsCard } from "./NewsCard";
import { motion } from "framer-motion";

interface NewsGridProps {
    items: NewsItem[];
}

export const NewsGrid = ({ items }: NewsGridProps) => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                    <NewsCard item={item} />
                </motion.div>
            ))}
        </div>
    );
};
