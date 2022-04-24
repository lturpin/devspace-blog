import Link from 'next/link';
import Image from 'next/image';
import CategoryLabel from './CategoryLabel';

const Post = ({ post, compact }) => {
  const {
    cover_image,
    cover_video,
    date,
    category,
    title,
    excerpt,
    author_image,
  } = post.frontmatter;
  return (
    <div
      className="w-full px-10 py-6 bg-white rounded-lg
    shadow-md mt-6"
    >
      {/* {!compact && cover_video && (
        <div className="iframe-container mb-1">
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
      )} */}
      <div>
        <Link href={`/blog/${post.slug}`}>
          <a>
            {cover_image && (
              <Image
                src={cover_image}
                alt=""
                height={315}
                width={600}
                className="mb-4 rounded object-cover"
              />
            )}

            <div className="flex justify-between items-center">
              <span className="font-light-text-gray-600">{date}</span>
              <CategoryLabel>{category}</CategoryLabel>
            </div>
            <div className="mt-2">
              <h2 className="text-xl font-bold">{title}</h2>

              <p className="mt-2 h-16 text-gray-600">{excerpt}</p>
            </div>
          </a>
        </Link>
      </div>
      <div className="flex justify-between items-center mt-6">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-gray-900 hover:text-blue-600">
            Read More
          </a>
        </Link>
        <div className="flex items-center">
          <img
            src={author_image}
            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            alt="author image"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
