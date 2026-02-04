import type { MetadataRoute } from "next";

import { getAllPosts } from "../lib/posts";

const siteUrl = "https://www.zerolabsai.com";

export const dynamic = "force-static";

const toValidDate = (value: string) => {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const now = new Date();

  const postEntries = posts.map((post) => {
    const lastModified = toValidDate(post.date);
    return {
      url: `${siteUrl}/posts/${post.slug}/`,
      ...(lastModified ? { lastModified } : {}),
    };
  });

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/posts/`,
      lastModified: now,
    },
    ...postEntries,
  ];
}
