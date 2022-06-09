import { remark } from 'remark';
import html from 'remark-html';
import { getAllPosts, getPostBySlug, Post } from '../../lib/blog';

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const markdown = await remark()
    .use(html)
    .process(post.content || '');
  const content = markdown.toString();

  return {
    props: {
      ...post,
      content,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

const BlogPost = (post: Post) => () =>
  (
    <article>
      <h1>{post.slug}</h1>
    </article>
  );

export default BlogPost;
