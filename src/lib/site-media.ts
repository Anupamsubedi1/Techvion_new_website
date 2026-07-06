import { cache } from "react";
import { getDb } from "./mongodb";

export type HeroVideos = { laptop: string; mobile: string };

/**
 * Cloudinary URLs for the hero intro videos.
 *
 * The canonical values live in MongoDB (`techvion.site_media` → `_id: "hero_videos"`)
 * so they can be updated without a code change. These constants are a safe
 * fallback used only if the database is unreachable at render time; they point
 * at the same uploaded assets, so the hero always renders.
 */
const FALLBACK: HeroVideos = {
  laptop:
    "https://res.cloudinary.com/djumoedpv/video/upload/v1783062134/techvion_intro_laptop.mp4",
  mobile:
    "https://res.cloudinary.com/djumoedpv/video/upload/v1783062146/techvion_intro_mobile.mp4",
};

type HeroVideosDoc = { _id: string; laptop?: string; mobile?: string };

/** Reads the hero video URLs from MongoDB (deduped per request). */
export const getHeroVideos = cache(async (): Promise<HeroVideos> => {
  try {
    const db = await getDb();
    const doc = await db
      .collection<HeroVideosDoc>("site_media")
      .findOne({ _id: "hero_videos" });
    return {
      laptop: doc?.laptop || FALLBACK.laptop,
      mobile: doc?.mobile || FALLBACK.mobile,
    };
  } catch (err) {
    console.error("[site-media] Falling back to bundled hero video URLs:", err);
    return FALLBACK;
  }
});
