import React from 'react';
import { motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import parseHtml from 'html-react-parser';
import Mask from '../components/Mask';
import '../App.css';
import { getFeaturedImage, titleToPath } from '../functions/NewsFunctions';
import PaperEdgeMask from '../assets/img/paper-edge-mask.svg';
import SceneryBackgroundImage from '../assets/img/dungeons-of-aether-env-concept.jpg';
import Footer from '../components/Footer';
import usePosts from '../hooks/usePosts';

function News() {
  return (
    <div
      className="news bg-dark"
      style={{
        backgroundImage: `url(${SceneryBackgroundImage})`,
        backgroundAttachment: 'fixed',
        marginTop: '-5rem',
      }}
    >
      <FeaturedSection />
      <Footer />
    </div>
  );
}

function FeaturedSection() {
  const { posts } = usePosts();
  const newsBgStyle = {
    backgroundColor: '#00000085',
    paddingTop: '10rem',
    paddingBottom: '10rem',
    height: 'max-content',
  };

  return (
    <motion.div
      className="News"
      initial={{ opacity: 0, marginTop: '20px', transitionDuration: 0.1 }}
      animate={{ opacity: 1, marginTop: '0px' }}
      exit={{ opacity: 0, marginTop: '0px' }}
    >

      <div
        style={newsBgStyle}
      >
        <Routes>
          <Route path="/*" element={<h1 style={{ minHeight: '800px' }}>NEWS</h1>} />
          {posts.arr.map((post) => {
            const path = titleToPath(post.title.rendered);
            return (
              <Route key={`${path}`} path={`${path}`} element={<Post post={post} />} />
            );
          })}
        </Routes>
      </div>
    </motion.div>
  );
}

function Post({ post }) {
  const postStyle = {
    minHeight: '800px',
    margin: '0 auto',
  };

  return (
    <div className="news-post" style={postStyle}>
      <img
        src={getFeaturedImage(post)}
        style={{ width: '100%' }}
        alt={post.title.rendered}
      />
      <div className="text-white" style={{ display: 'block', textAlign: 'left' }}>
        <h1>{parseHtml(post.title.rendered)}</h1>
        <p>{parseHtml(post.content.rendered)}</p>
      </div>
    </div>
  );
}

function TornPaperMask({ children }) {
  return (
    <div style={{ marginTop: '-5rem' }}>
      <Mask mask={`url(${PaperEdgeMask})`}>{children}</Mask>
    </div>
  );
}

function GradientMask({ children }) {
  return (
    <Mask mask="linear-gradient(to top, transparent 5%, #fff 15% 90%)">
      {children}
    </Mask>
  );
}

export default News;
