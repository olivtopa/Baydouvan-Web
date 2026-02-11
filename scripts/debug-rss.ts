import Parser from 'rss-parser';

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
    }
});

const feeds = [
    'https://www.wearetech.africa/feed',
    'https://cio-mag.com/feed/',
    'https://digital-business.africa/feed/',
];

async function inspectFeeds() {
    for (const url of feeds) {
        console.log(`\n--- Inspecting ${url} ---`);
        try {
            const feed = await parser.parseURL(url);
            const firstItem = feed.items[0];
            if (firstItem) {
                console.log('Title:', firstItem.title);
                console.log('Keys:', Object.keys(firstItem));
                console.log('media:content:', firstItem.mediaContent);
                console.log('enclosure:', firstItem.enclosure);
                // Check for images in content
                const content = firstItem.contentEncoded || firstItem.content || firstItem.description || '';
                const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
                console.log('Image in content match:', imgMatch ? imgMatch[1] : 'None');
            } else {
                console.log('No items found.');
            }
        } catch (error) {
            console.error('Error fetching/parsing:', (error as Error).message);
        }
    }
}

inspectFeeds();
