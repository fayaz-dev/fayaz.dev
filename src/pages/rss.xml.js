import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const publishedPosts = posts
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  return rss({
    title: 'fayaz.dev',
    description: 'Unpolished blog of Fayaz Ahmed - Creative developer sharing insights on web development, design, and technology.',
    site: context.site,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags,
      author: post.data.author || 'Fayaz Ahmed',
    })),
    customData: `<language>en-us</language>`,
  });
}