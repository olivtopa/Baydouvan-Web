import Parser from 'rss-parser';
import { RSS_FEEDS } from '@/data/rssFeeds';

export interface NewsItem {
    id: string;
    title: string;
    summary: string;
    link: string; // Changed from videoUrl to link
    date: string;
    category: 'economie' | 'culture' | 'tech';
    source: string;
    imageUrl?: string; // Optional, as not all feeds provide images
}

const parser = new Parser({
    customFields: {
        item: [
            ['media:content', 'mediaContent'],
            ['enclosure', 'enclosure'],
            ['content:encoded', 'contentEncoded'],
            ['content', 'content'],
            ['description', 'description']
        ]
    },
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    },
    timeout: 5000, // 5 seconds timeout
});

export async function fetchNewsData(): Promise<NewsItem[]> {
    const allNews: NewsItem[] = [];

    for (const [category, urls] of Object.entries(RSS_FEEDS) as [string, string[]][]) {
        const categoryItems: NewsItem[] = [];
        for (const url of urls) {
            try {
                const feed = await parser.parseURL(url);

                const feedItems = feed.items.slice(0, 10).map((item) => { // Increased feed limit to ensure diversity
                    // Helper to validate image URL
                    const isValidImage = (url: string | undefined): boolean => {
                        if (!url) return false;
                        // specific check for WordPress emojis which are not real news images
                        if (url.includes('s.w.org') || url.includes('emoji')) return false;
                        return true;
                    }

                    // Try to extract image
                    let imageUrl: string | undefined = undefined;

                    if (item.mediaContent?.$?.url && isValidImage(item.mediaContent.$.url)) {
                        imageUrl = item.mediaContent.$.url;
                    } else if (item.enclosure?.url && isValidImage(item.enclosure.url)) {
                        imageUrl = item.enclosure.url;
                    } else if (item.contentEncoded) {
                        const imgMatch = item.contentEncoded.match(/<img[^>]+src="([^">]+)"/);
                        if (imgMatch && isValidImage(imgMatch[1])) imageUrl = imgMatch[1];
                    }

                    // Fallback to description or content if no image found yet
                    if (!imageUrl && (item.content || item.description)) {
                        const contentToCheck = item.content || item.description || '';
                        const imgMatch = contentToCheck.match(/<img[^>]+src="([^">]+)"/);
                        if (imgMatch && isValidImage(imgMatch[1])) imageUrl = imgMatch[1];
                    }

                    return {
                        id: item.guid || item.link || Math.random().toString(36).substring(7),
                        title: item.title || 'Sans titre',
                        summary: item.contentSnippet || item.content || '',
                        link: item.link || '',
                        date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }) : 'Date inconnue',
                        category: category as 'economie' | 'culture' | 'tech',
                        source: feed.title || 'Source inconnue',
                        imageUrl
                    };
                });

                categoryItems.push(...feedItems);

            } catch (error) {
                console.warn(`Error fetching feed ${url}:`, error instanceof Error ? error.message : String(error));
                // Continue to next feed even if one fails
            }
        }
        // Limit to 12 items per category as requested
        allNews.push(...categoryItems.slice(0, 12));
    }

    // Sort by date (if possible, though date formats vary) or shuffle/interleave? 
    // For now, let's just return them. Sorting mixed dates from RSS can be tricky due to format differences.
    return allNews;
}
