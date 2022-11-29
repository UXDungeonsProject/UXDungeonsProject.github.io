import { useState, useEffect } from 'react';

let cachedPosts = {
  status: 'idle',
  arr: [],
};

const usePosts = () => {
  const [posts, setPosts] = useState(cachedPosts);

  useEffect(() => {
    if (cachedPosts.status !== 'idle') {
      setPosts(cachedPosts);
      return;
    }

    const fetchData = async () => {
      if (posts.status === 'fetching') {
        cachedPosts = {
          status: 'fetched',
          arr: [],
        };
        setPosts(cachedPosts);
        return;
      }
      setPosts({
        status: 'fetching',
        arr: [],
      });
      const response = await fetch('https://public-api.wordpress.com/wp/v2/sites/dungeonsofaether.wordpress.com/posts');
      if (!response.ok) {
        // oops! something went wrong
        return;
      }
      const data = await response.json();

      cachedPosts = {
        status: 'fetched',
        arr: data,
      };
      setPosts(cachedPosts);
    };

    fetchData();
  }, []);

  return { posts };
};

export default usePosts;
