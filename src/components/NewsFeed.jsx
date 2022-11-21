import React, { useEffect, useState } from 'react';
import parseHtml from 'html-react-parser';

import { parseISO, format as formatDate } from 'date-fns';
import placeHolderImage from '../assets/img/DUNGEONSofAETHER_logo-optimized.png';
import DungeonButton from './DungeonButton';

export default function NewsFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await fetch('https://public-api.wordpress.com/wp/v2/sites/dungeonsofaether.wordpress.com/posts');
      if (!response.ok) {
        // oops! something went wrong
        return;
      }

      const fetchedPosts = await response.json();
      setPosts(fetchedPosts);
    }

    loadPosts();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {posts.map((post, index) => (
        <NewsPreview key={post.title.rendered} post={post} />
      ))}
    </div>
  );
}

function NewsPreview({ post }) {
  const [isHover, setIsHover] = useState(false);

  const getFeaturedImage = (newsPost) => {
    if (newsPost && newsPost.jetpack_featured_media_url) {
      if (newsPost.jetpack_featured_media_url.length > 0) {
        return newsPost.jetpack_featured_media_url;
      }
    }
    return placeHolderImage;
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const newsPreviewStyle = {
    // width: '350px',
    // minWidth: '350px',
    height: '500px',
    cursor: 'pointer',
  };

  const newsPreviewImageStyle = {
    backgroundImage: `url(${getFeaturedImage(post)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '40%',
    width: '100%',
  };

  const newsPreviewTextStyle = {
    height: '60%',
    margin: 'auto 20px',
    position: 'relative',
  };

  const positionedBottomCenter = {
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    WebkitTransform: 'translateX(-50%)',
    transform: 'translateX(-50%)',
  };

  return (
    <div
      className="news-preview bg-light"
      style={newsPreviewStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="news-preview-image bg-dark"
        style={newsPreviewImageStyle}
      />
      <div
        className="news-preview-text text-white"
        style={newsPreviewTextStyle}
      >

        <div style={{ height: '90%', overflow: 'hidden' }}>
          <h4 style={{ textAlign: 'left' }}>{parseHtml(post.title.rendered)}</h4>
          <p style={{ textAlign: 'left' }}>{formatDate(parseISO(post.date), 'LLLL d, yyyy')}</p>
          <div style={{ textAlign: 'left' }}>{parseHtml(post.excerpt.rendered)}</div>
        </div>

        <div style={positionedBottomCenter}>
          <DungeonButton text="Read More" hover={isHover} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
