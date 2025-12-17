import { CLOUD_NAME } from "../constants/CloudinaryConstants";

export function cloudinaryThumbnailUrl(publicId: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_400/${publicId}`;
}