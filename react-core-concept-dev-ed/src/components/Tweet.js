import React from "react";
import styled from "styled-components";

const Tweet = ({ name, tweet, tweets, deleteTweet, id }) => {
  return (
    <div className="tweet">
      <H1>{name}</H1>
      <p>{tweet}</p>
      <button onClick={() => deleteTweet(id)}>delete</button>
      <button>like</button>
    </div>
  );
};

const H1 = styled.h1`
  color: green;
  font-size: 2rem;
`;

export default Tweet;
