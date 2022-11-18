import React, { useEffect, useState } from 'react';
import parseHtml from 'html-react-parser';

import { parseISO, format as formatDate } from 'date-fns';
import placeHolderImage from '../assets/img/texture.jpg';

const newsPreviewStyle = {
  width: '350px',
  minWidth: '350px',
  height: '500px',
  backgroundColor: 'red',
  margin: '20px',
};

export default function NewsFeed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch('https://public-api.wordpress.com/wp/v2/sites/dungeonsofaether.wordpress.com/posts');
      if (!response.ok) {
        // oups! something went wrong
        return;
      }

      const fetchedPosts = await response.json();
      setPosts(fetchedPosts);
    }

    loadPosts();
  }, []);

  const getFeaturedImage = (post) => {
    if (post && post.jetpack_featured_media_url) {
      if (post.jetpack_featured_media_url.length > 0) {
        return post.jetpack_featured_media_url;
      }
    }
    return placeHolderImage;
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {posts.map((post, index) => (
        <div style={newsPreviewStyle}>
          <div style={{
            backgroundImage: `url(${getFeaturedImage(post)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: '195px',
            width: '100%',
          }}
          />
          <h4 style={{ textAlign: 'left' }}>{parseHtml(post.title.rendered)}</h4>
          <p style={{ textAlign: 'left' }}>{formatDate(parseISO(post.date), 'LLLL d, yyyy')}</p>
          <p style={{ textAlign: 'left' }}>{parseHtml(post.excerpt.rendered)}</p>
        </div>
      ))}
      ;
    </div>
  );
}
