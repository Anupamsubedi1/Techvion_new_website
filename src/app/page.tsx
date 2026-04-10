import type { Metadata } from "next";
import { HomePage } from "./home-page";

export const metadata: Metadata = {
  title: "Home",
  description: "Techvion builds scalable digital solutions with premium UX and engineering.",
};

export default function Home() {
  return <HomePage />;
}
