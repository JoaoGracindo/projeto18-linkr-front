import apiPosts from "../../../../services/apiPosts";
import dayjs from "dayjs";
export default function refreshPosts({
  page,
  refresh_type,
  hashtag,
  user_id,
  newestTimestamp,
  oldestTimestamp,
  setNewestTimestamp,
  setOldestTimestamp,
  newPosts,
  timeline,
  setTimeline,
  setNewPosts,
  token,
}) {
  let method;
  let timestamp;
  let setTimestamp;
  if(!newestTimestamp) return
  if (refresh_type === "top") {
    timestamp = newestTimestamp;
    setTimestamp = (res) =>
      setNewestTimestamp(
        dayjs(res.data[0]?.created_at)
          .subtract(3, "hour")
          .add(1, "second")
          .toISOString()
      );
  } else {
    timestamp = oldestTimestamp;
    setTimestamp = (res) =>
      setOldestTimestamp(
        dayjs(res.data[res.data.length - 1]?.created_at)
          .subtract(3, "hour")
          .add(1, "second")
          .toISOString()
      );
  }

  if (page === "timeline") {
    method = apiPosts.refreshPostsTimeline(token, refresh_type, timestamp);
  }

  if (page === "hashtag") {
    method = apiPosts.refreshPostsHashtag(
      hashtag,
      token,
      refresh_type,
      timestamp
    );
  }
  if (page === "user_id") {
    method = apiPosts.refreshPostsUserId(
      user_id,
      token,
      refresh_type,
      timestamp
    );
  }
  console.log(refresh_type, timestamp);
  method
    .then((res) => {
      console.log(res.data);
      if (res.data[0]) {
        setNewPosts(res.data.concat(newPosts));
        setTimestamp(res);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

//precisa receber timestamp, settimestamp, page, token, setLoading

//precisa enviar a quantidade de posts
