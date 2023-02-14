import React, { useState, useEffect } from 'react';

import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState('Valentine');
  const [isClick, setClick] = useState(false);
  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit +".json").then(
      res => {
        if (res.status !== 200) {
          console.warn("Warning: Something is wrong with the api.");
          return;
        }
        res.json().then(data => {
          if (data != null)
            setPosts(data.data.children);
        });
      }
    )
  }, [subreddit]);

  return (
    <div className="App">
      <header>
        <input class="subreddit_input" onChange={e => setSubreddit(e.target.value)} value={subreddit} />
      </header>
      <div className="posts">
        {(posts != null) ? posts.map((post, index) => <Post key={index} post={post.data} />) : ''}
      </div>
    </div>
  );
}

export default App;