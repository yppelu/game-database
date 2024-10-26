import { GetPlatformsWithUniqueLogos, Platform } from "@/types";
import { platformSrcs } from "./consts";

const getPlatformsWithUniqueLogos: GetPlatformsWithUniqueLogos = (
  platforms
) => {
  const visited = new Set<Platform["id"]>();
  const unique: Platform[] = [];

  for (const platform of platforms) {
    if (!visited.has(platform.id)) {
      unique.push(platform);
      for (const platformId in platformSrcs) {
        if (platformSrcs[platform.id] === platformSrcs[platformId]) {
          visited.add(Number(platformId));
        }
      }
    }
  }

  for (let i = 0; i < unique.length; i++) {
    if (!(unique[i].id in platformSrcs)) {
      unique.splice(i, 1);
      i--;
    }
  }

  return unique;
};

export default getPlatformsWithUniqueLogos;
