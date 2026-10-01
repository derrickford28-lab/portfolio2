import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const NAV_ITEMS = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#nexus" },
  { label: "SERVICES", href: "#story" },
  { label: "CONTACT", href: "#contact" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/game-website",
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/derrickford28-lab",
    icon: FaDiscord,
  },
  {
    href: "https://x.com/_sanidhyy",
    icon: FaXTwitter,
  },
  {
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    href: "https://twitch.com",
    icon: FaTwitch,
  },
] as const;

export const VIDEO_LINKS = {
  feature1:
    "/videos/feature-1.mp4",
  feature2:
    "/videos/feature-2.mp4",
  feature3:
    "/videos/feature-3.mp4",
  feature4:
    "/videos/feature-4.mp4",
  feature5:
    "/videos/feature-5.mp4",
  hero1:
    "/videos/hero-1.mp4",
  hero2:
    "/videos/hero-2.mp4",
  hero3:
    "/videos/hero-3.mp4",
  hero4:
    "/videos/hero-4.mp4",
};
