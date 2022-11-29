import placeHolderImage from '../assets/img/placeholder-thumbnail.jpg';

export const getFeaturedImage = (newsPost) => {
  if (newsPost && newsPost.jetpack_featured_media_url) {
    if (newsPost.jetpack_featured_media_url.length > 0) {
      return newsPost.jetpack_featured_media_url;
    }
  }
  return placeHolderImage;
};

export function titleToPath(string) {
  const str = string.replace('&nbsp;', ' ').replace(/[^\w\s']|_/g, '').replace(/\s/g, '-');
  return str;
}
