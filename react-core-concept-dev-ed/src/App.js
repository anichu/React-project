import "./styles.css";
import React, { useState } from "react";
import Tweet from "./components/Tweet";
import CreateTweet from "./components/CreateTweet";
import { v4 } from "uuid";
import TweetList from "./components/TweetList";
import "./styles/style.scss";
export default function App() {
  const [input, setInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const name = "anis molla";
  const createTweetHandler = (e) => {
    e.preventDefault();
    console.log("create");
    setTweets([...tweets, { message: input, id: v4() }]);
    setInput("");
  };

  return (
    <div>
      <CreateTweet
        setInput={setInput}
        createTweetHandler={createTweetHandler}
        input={input}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}
