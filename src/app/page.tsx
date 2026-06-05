import type { Metadata } from "next";
import { HomePage } from "./home-page";

export const metadata: Metadata = {
  title: "Techvion: Design, Build & Scale Software",
  description:
    "Techvion is a product studio that designs, builds and scales fast, reliable web, mobile and e-commerce software for ambitious teams worldwide.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomePage />;
}
