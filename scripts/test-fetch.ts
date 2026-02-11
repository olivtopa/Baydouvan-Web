import { fetchNewsData } from '../lib/fetchNews';

async function testFetch() {
    console.log('Testing fetchNewsData()...');
    try {
        const news = await fetchNewsData();
        const techNews = news.filter(n => n.category === 'tech');

        console.log(`Total News: ${news.length}`);
        console.log(`Tech News: ${techNews.length}`);

        techNews.forEach(n => {
            console.log(`- [${n.source}] ${n.title}`);
        });

        if (techNews.length === 0) {
            console.error('FAIL: No tech news found locally.');
        } else {
            console.log('SUCCESS: Tech news found locally.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

testFetch();
