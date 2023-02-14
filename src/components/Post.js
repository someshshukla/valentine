import React from 'react';

function Post(props) {
  let base_url = 'https://reddit.com';

  return (
    <post>
      <a href={ base_url + props.post.permalink } target="_blank">
        <h3>{ props.post.title }</h3>
      </a>
    </post>
  )
}

export default Post;