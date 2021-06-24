import axios from "axios";
const KEY = "AIzaSyCmhyVSKXXAa5iY4vme7cyUY8FG8voBkcU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
