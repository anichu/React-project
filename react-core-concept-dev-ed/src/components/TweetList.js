import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets, setTweets }) => {
  const deleteTweet = (uid) => {
    const tweetsd = tweets.filter((tw) => tw.id !== uid);
    setTweets(tweetsd);
  };
  console.log(tweets);
  return (
    <React.Fragment>
      {tweets.map((tweet) => {
        return (
          <Tweet
            deleteTweet={deleteTweet}
            key={tweet.id}
            tweet={tweet.message}
            id={tweet.id}
            name={name}
            tweets={tweets}
          />
        );
      })}
    </React.Fragment>
  );
};

export default TweetList;
