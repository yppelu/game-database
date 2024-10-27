import { Platform } from "@/types";
import getPlatformsWithUniqueLogos from "@/helpers/getPlatformsWithUniqueLogos";

describe("getPlatformsWithUniqueLogos", () => {
  it("should only return platforms with unique icons", () => {
    const notUniquePlatforms: Platform[] = [
      { id: 1, name: "Platform 1" },
      { id: 1, name: "Platform 1" },
      { id: 2, name: "Platform 2" }
    ];
    const unique: Platform[] = [
      { id: 1, name: "Platform 1" },
      { id: 2, name: "Platform 2" }
    ];

    const result = getPlatformsWithUniqueLogos(notUniquePlatforms);
    expect(result).toEqual(unique);
  });

  it("should return only platforms present in platformSrcs", () => {
    const platforms: Platform[] = [
      { id: Infinity, name: "Platform Infinity" },
      { id: 1, name: "Platform 1" },
      { id: -121, name: "Platform -121" }
    ];

    const result = getPlatformsWithUniqueLogos(platforms);
    expect(result).toEqual([{ id: 1, name: "Platform 1" }]);
  });
});
