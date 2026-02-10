import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getAllPosts, getPostBySlug, type PostMeta } from "../../lib/posts";
import PreviewBanner from "../../components/PreviewBanner";

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontmatter: PostMeta;
};

export default function PostPage({ source, frontmatter }: PostPageProps) {
  return (
    <main className="page">
      <div className="wrap">
        <PreviewBanner />
        <Link className="back" href="/">
          &larr; Back to blog
        </Link>

        <article className="post">
          <header className="header">
            <p className="eyebrow">Zero Labs Blog</p>
            <h1 className="title">{frontmatter.title}</h1>
            <p className="meta">
              <time dateTime={frontmatter.date}>{frontmatter.date}</time>
            </p>
            <p className="description">{frontmatter.description}</p>
          </header>

          <div className="content">
            <MDXRemote {...source} />
          </div>
        </article>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #0b0f14;
        }

        .page {
          min-height: 100vh;
          padding: 72px 24px 96px;
          color: #eef1f6;
          font-family: "Space Grotesk", "IBM Plex Sans", "Segoe UI", sans-serif;
          background: radial-gradient(
              900px 600px at 5% 10%,
              rgba(72, 122, 255, 0.18),
              transparent 60%
            ),
            radial-gradient(
              700px 520px at 90% 0%,
              rgba(24, 210, 180, 0.16),
              transparent 55%
            ),
            #0b0f14;
        }

        .wrap {
          max-width: 760px;
          margin: 0 auto;
        }

        .back {
          display: inline-flex;
          margin-bottom: 28px;
          color: #9fb0c9;
          text-decoration: none;
          font-size: 0.95rem;
        }

        .back:hover {
          color: #7ab4ff;
        }

        .header {
          margin-bottom: 32px;
        }

        .eyebrow {
          margin: 0 0 12px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          font-size: 0.78rem;
          color: #a7b5cc;
        }

        .title {
          margin: 0 0 12px;
          font-size: clamp(2.2rem, 5.2vw, 3.2rem);
          letter-spacing: -0.02em;
        }

        .meta {
          margin: 0 0 12px;
          font-size: 0.95rem;
          color: #93a4be;
        }

        .description {
          margin: 0;
          color: #c7d1e2;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .content {
          margin-top: 32px;
        }

        .content :global(p) {
          margin: 0 0 18px;
          color: #d5dbe8;
          line-height: 1.75;
        }

        .content :global(h2) {
          margin: 30px 0 12px;
          font-size: 1.55rem;
        }

        .content :global(h3) {
          margin: 24px 0 10px;
          font-size: 1.25rem;
        }

        .content :global(ul) {
          margin: 0 0 18px 18px;
          padding: 0;
          color: #d5dbe8;
        }

        .content :global(li) {
          margin-bottom: 8px;
        }

        .content :global(a) {
          color: #7ab4ff;
        }

        .content :global(code) {
          background: rgba(122, 180, 255, 0.12);
          padding: 0 6px;
          border-radius: 6px;
          font-size: 0.95rem;
        }

        .content :global(pre) {
          margin: 0 0 20px;
          padding: 16px;
          border-radius: 12px;
          background: #121826;
          overflow-x: auto;
        }

        @media (max-width: 640px) {
          .page {
            padding: 56px 20px 72px;
          }
        }
      `}</style>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);
  const source = await serialize(post.content);

  return {
    props: {
      source,
      frontmatter: {
        slug: post.slug,
        title: post.title,
        date: post.date,
        description: post.description,
      },
    },
  };
};
