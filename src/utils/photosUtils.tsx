export const CLOUD_NAME = "dg59nrr85";

export function cloudinaryThumbnailUrl(publicId: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_400/${publicId}`;
}

export function getAlbumNameFromTagName(tagName: string) {
  switch (tagName) {
    case "testTag1":
      return "Test Tag 1";
    case "testTag2":
      return "Test Tag 2";
    default:
      return "Photography";
  }
}