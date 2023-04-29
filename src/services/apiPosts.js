import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

async function refreshPostsTimeline(token, refresh_type, timestamp) {
  console.log(timestamp)
  const promise = await axios({
    method: "get",
    url: `${BASE_URL}/timeline`,
    headers: { Authorization: "Bearer " + token, refresh_type, timestamp },
  });
  return promise;
}

async function refreshPostsHashtag(hashtag, token, refresh_type, timestamp) {
  const promise = await axios({
    method: "get",
    url: `${BASE_URL}/hashtags/${hashtag}`,
    body: { refresh_type, timestamp },
    headers: { Authorization: "Bearer " + token },
  });
  return promise;
}

async function refreshPostsUserId(user_id, token, refresh_type, timestamp) {
  const promise = await axios({
    method: "get",
    url: `${BASE_URL}/users/${user_id}`,
    body: { refresh_type, timestamp },
    headers: { Authorization: "Bearer " + token },
  });
  return promise;
}

const apiPosts = {
  refreshPostsTimeline,
  refreshPostsHashtag,
  refreshPostsUserId,
};

export default apiPosts;
