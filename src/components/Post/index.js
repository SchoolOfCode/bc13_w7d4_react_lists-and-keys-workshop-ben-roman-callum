import React from 'react';

import './index.css';

function Post({ postId, title, date, author, text, highlights, image }) {
  return <article>
    <p>{title}</p>
  </article>;
}

export default Post;
