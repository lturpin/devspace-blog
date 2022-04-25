import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Layout from '@/components/Layout';
import CategoryLabel from '@/components/CategoryLabel';
import matter from 'gray-matter';
// import ReactMarkdown from 'react-markdown';
import Markdown from '@/components/Markdown';
// import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PostPage = ({
  frontmatter: {
    title,
    category,
    date,
    cover_video,
    cover_image,
    author,
    author_image,
  },
  content,
  slug,
}) => {
  return (
    <Layout title={title}>
      <div className="flex flex-col items-center">
        <Link href="/blog">Go Back</Link>
        <div className="w-full max-w-5xl px-10 py-6 bg-white rounded-lg shadow-md mt-6">
          <div className="flex justify-between items-center mt-4">
            <h1 className="text-5xl mb-7">{title}</h1>
            <CategoryLabel>{category}</CategoryLabel>
          </div>
          {cover_video && (
            <div className="iframe-container">
              <iframe
                width="560"
                height="315"
                src={cover_video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {/* {cover_image && <img src={cover_image} alt="" className="w-full rounded" /> } */}
          <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
            <div className="flex items-center">
              {/* <img
                src={author_image}
                alt="author image"
                className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
              /> */}
              <h4>{author}</h4>
            </div>
            <div className="mr-4">{date}</div>
          </div>
          <div className="blog-text mt-2">
            <Markdown content={content} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}

export default PostPage;
