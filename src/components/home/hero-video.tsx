"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = { laptopSrc: string; mobileSrc: string };

/**
 * Cloudinary first-frame still (`so_0`) used as the video's poster, derived from
 * the stored mp4 URL. Because the poster IS frame 0 of the video, playback
 * starts from the exact same image — a seamless still-to-motion start with no
 * visible swap.
 */
function posterFor(url: string) {
  return url.replace("/upload/", "/upload/so_0,q_auto/").replace(/\.mp4$/, ".jpg");
}

/**
 * Full-bleed hero intro video.
 *
 * Professional load sequence: a dark brand backdrop, then the device-correct
 * video reveals via its own poster frame with a single soft fade — no headline
 * that appears and then disappears. The portrait (mobile) encode is shown in
 * full via `object-contain` so nothing is cropped or hidden behind the navbar;
 * the landscape (laptop) encode fills the screen with `object-cover`.
 *
 * Under `prefers-reduced-motion` the poster still is shown and nothing autoplays.
 */
export function HeroVideo({ laptopSrc, mobileSrc }: Props) {
  const reduce = useReducedMotion();
  const [src, setSrc] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  // Load only the encode that matches the viewport (portrait for phones).
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const pick = () => setSrc(mq.matches ? mobileSrc : laptopSrc);
    pick();
    mq.addEventListener("change", pick);
    return () => mq.removeEventListener("change", pick);
  }, [laptopSrc, mobileSrc]);

  useEffect(() => setReady(false), [src]);

  const fit = "object-contain md:object-cover";

  // `pt-16` reserves the fixed navbar's height (h-16) as a clean strip above the
  // hero, so the video block starts *after* the navbar instead of underneath it.
  return (
    <section className="w-full bg-background pt-16">
      <div className="relative isolate min-h-[calc(100dvh-4rem)] w-full overflow-hidden bg-night">
        {src &&
          (reduce ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={posterFor(src)}
              alt=""
              aria-hidden="true"
              className={cn("absolute inset-0 h-full w-full", fit)}
            />
          ) : (
            <video
              key={src}
              poster={posterFor(src)}
              className={cn(
                "absolute inset-0 h-full w-full transition-opacity duration-700 ease-out",
                fit,
                ready ? "opacity-100" : "opacity-0",
              )}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadedData={() => setReady(true)}
              aria-hidden="true"
            >
              <source src={src} type="video/mp4" />
            </video>
          ))}
      </div>
    </section>
  );
}
