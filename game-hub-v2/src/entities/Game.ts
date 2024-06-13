import { Platform } from "./Platform";

export interface Game {
  id: number;
  description_raw: string;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
