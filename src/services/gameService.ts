import ApiClient from "./api-client";
import { Platform } from "./platformService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

export default new ApiClient<Game>("/games");
