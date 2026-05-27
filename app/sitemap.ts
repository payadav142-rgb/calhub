import { MetadataRoute } from "next";

export default function sitemap():
  MetadataRoute.Sitemap {
  return [
    {
      url: "https://calculator-hub-murex.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://calculator-hub-murex.vercel.app/brick-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://calculator-hub-murex.vercel.app/cement-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://calculator-hub-murex.vercel.app/concrete-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://calculator-hub-murex.vercel.app/paint-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://calculator-hub-murex.vercel.app/tile-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://calculator-hub-murex.vercel.app/plaster-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://calculator-hub-murex.vercel.app/sand-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://calculator-hub-murex.vercel.app/gravel-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://calculator-hub-murex.vercel.app/steel-weight-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}