import { getHeroVideos } from "@/lib/site-media";
import { HeroVideo } from "./hero-video";

/**
 * Hero section: a full-viewport intro video with no overlaid copy.
 * Video URLs are read from MongoDB (see {@link getHeroVideos}) and the correct
 * device-specific encode is chosen client-side in {@link HeroVideo}.
 */
export async function Hero() {
  const { laptop, mobile } = await getHeroVideos();
  return <HeroVideo laptopSrc={laptop} mobileSrc={mobile} />;
}
