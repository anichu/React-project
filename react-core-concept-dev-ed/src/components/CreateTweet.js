import React from "react";

const CreateTweet = ({ setInput, createTweetHandler, input }) => {
  return (
    <form onSubmit={createTweetHandler}>
      <textarea
        cols="25"
        rows="5"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
