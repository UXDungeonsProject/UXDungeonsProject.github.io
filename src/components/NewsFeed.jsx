import React, { useEffect, useState } from 'react';
import parseHtml from 'html-react-parser';
import { parseISO, format as formatDate } from 'date-fns';
import Mask from './Mask';
import placeHolderImage from '../assets/img/placeholder-thumbnail.jpg';
import DungeonButton from './DungeonButton';

import PaperEdgeMask from '../assets/img/torn-paper-page.svg';

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
    height: '500px',
    cursor: 'pointer',
    position: 'relative',

  };

  const newsPreviewImageStyle = {
    backgroundImage: `url(${getFeaturedImage(post)})`,
    backgroundSize: isHover ? '120%' : '130%',
    backgroundPosition: 'center center',
    height: '40%',
    width: '100%',
    zIndex: '1',
    transition: '0.2s',
  };

  const newsPreviewTextStyle = {
    height: '60%',
    margin: '20px 20px',
    position: 'relative',
    zIndex: '1',
  };

  const positionedBottomCenter = {
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    WebkitTransform: 'translateX(-50%)',
    transform: 'translateX(-50%)',
    zIndex: '1',
  };

  return (
    <div
      className="news-preview"
      style={newsPreviewStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="bg-dark"
        style={{
          height: '100%',
          width: '100%',
          WebkitMaskImage: `url(${PaperEdgeMask})`,
          maskImage: `url(${PaperEdgeMask})`,
          WebkitMaskSize: 'cover',
          maskSize: 'cover',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      >
        <div
          className="news-preview-image bg-dark"
          style={newsPreviewImageStyle}
        />
        <div
          className="news-preview-text text-white"
          style={newsPreviewTextStyle}
        >
          <div style={{
            height: '90%',
            overflow: 'hidden',
            textAlign: 'left',
            position: 'relative',
            zIndex: '1',
            transition: '0.2s',
            textShadow: (isHover) ? '0px 0px 6px #FFFFFF80' : 'none',
          }}
          >
            <h3>
              {parseHtml(post.title.rendered)}
            </h3>
            <p className="text-primary" style={{ textShadow: 'none' }}>
              {formatDate(parseISO(post.date), 'LLLL d, yyyy')}
            </p>
            <div>
              {parseHtml(post.excerpt.rendered)}
            </div>
          </div>
        </div>
      </div>
      <div style={positionedBottomCenter}>
        <DungeonButton text="Read More" hover={isHover} onClick={() => {}} />
      </div>
    </div>
  );
}
