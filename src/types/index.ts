export interface MenuItems {
  name: string;
  href: string;
}

export type PortfolioCategories = "all" | "video-editing" | "camera-work" | "2d-animation";

export interface PortfolioProject {
  name: string;
  image: string;
  slug: string;
  description: string;
  youtube_id: string;
  categories: PortfolioCategories[];
}
