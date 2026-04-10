import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.techvion.com";
  const routes = ["/", "/services", "/projects", "/technology", "/about", "/contact", "/inquiry"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
