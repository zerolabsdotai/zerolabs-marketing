import Link from "next/link";
import type { GetStaticProps } from "next";
import { getAllPosts, type PostMeta } from "../lib/posts";
import PreviewBanner from "../components/PreviewBanner";

type HomeProps = {
  posts: PostMeta[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <main className="page">
      <div className="wrap">
        <PreviewBanner />
        <header className="header">
          <p className="eyebrow">Zero Labs Blog</p>
          <h1 className="title">Notes from the Zero Labs team.</h1>
          <p className="subtitle">
            Product updates, research notes, and practical guidance on building
            reliable AI operations.
          </p>
        </header>

        <section className="posts" aria-label="Blog posts">
          {posts.map((post) => (
            <article key={post.slug} className="post">
              <p className="meta">
                <time dateTime={post.date}>{post.date}</time>
              </p>
              <h2 className="postTitle">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="description">{post.description}</p>
            </article>
          ))}
        </section>
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
              rgba(72, 122, 255, 0.2),
              transparent 60%
            ),
            radial-gradient(
              700px 520px at 90% 0%,
              rgba(24, 210, 180, 0.18),
              transparent 55%
            ),
            #0b0f14;
        }

        .wrap {
          max-width: 860px;
          margin: 0 auto;
        }

        .header {
          margin-bottom: 48px;
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
          font-size: clamp(2.4rem, 6vw, 3.6rem);
          letter-spacing: -0.02em;
        }

        .subtitle {
          margin: 0;
          max-width: 620px;
          color: #c5cfdf;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .posts {
          display: grid;
          gap: 24px;
        }

        .post {
          padding: 24px 26px;
          border-radius: 18px;
          background: rgba(15, 20, 28, 0.86);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
        }

        .meta {
          margin: 0 0 10px;
          font-size: 0.9rem;
          color: #93a4be;
        }

        .postTitle {
          margin: 0 0 10px;
          font-size: 1.45rem;
        }

        .postTitle :global(a) {
          color: #f4f7fb;
          text-decoration: none;
        }

        .postTitle :global(a:hover) {
          color: #7ab4ff;
        }

        .description {
          margin: 0;
          color: #c7d1e2;
          line-height: 1.6;
        }

        @media (max-width: 640px) {
          .page {
            padding: 56px 20px 72px;
          }

          .post {
            padding: 20px;
          }
        }
      `}</style>
    </main>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
