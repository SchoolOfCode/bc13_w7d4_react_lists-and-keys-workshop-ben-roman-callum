import React from "react";

import "./index.css";

function Post({ title, date, author, text, highlights, image }) {
  return (
    <article>
      <h1>{title}</h1>
      <h3>{author}</h3>
      <time>{date}</time>
      <p>{text}</p>

      {highlights.map((highlight) => {
        return <mark key={highlight}>{highlight}</mark>;
      })}

      <img src={image.link} alt={image.alt}></img>
    </article>
  );
}

export default Post;
