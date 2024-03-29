import PostBox from "./PostModel";
import Header from "../../Header/index";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import apiHashtags from "../../../services/apiHashtags";
import { FeedContainer, FeedWrapper } from "../../../styles/FeedContainer";
import TrendingTags from "../../Tags/Trending/trendingTable";
import { UserPageContainer } from "../../../pages/UserPage/style";
import SearchBar from "../../SearchBar/SearchBar";
import { TitleContainer } from "../../../styles/TitleContainer";
import { TokenContext } from "../../../context/UserContext";
import RefreshButton from "./RefreshPosts/RefreshButton";
import refreshPosts from "./RefreshPosts/request";
import useInterval from "use-interval";
import dayjs from "dayjs";

export default function Timeline() {
  const [newestTimestamp, setNewestTimestamp] = useState();
  const [oldestTimestamp, setOldestTimestamp] = useState();
  const [timeline, setTimeline] = useState([]);
  const [newPosts, setNewPosts] = useState([])
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const token = JSON.parse(localStorage.token);
  const img = JSON.parse(localStorage.img);
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const navigate = useNavigate();
  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    axios
      .get(`${url}/timeline`, config)
      .then((response) => {
        setTimeline([...response.data]);
        setNewestTimestamp(dayjs(response.data[0].created_at).subtract(3, 'hour').add(1, 'second').toISOString());
        setOldestTimestamp(dayjs(response.data[response.data.length - 1].created_at).subtract(3, 'hour').add(1, 'second').toISOString());
      })
      .catch((err) => {
        alert(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
      });
  }, []);

  async function handleForm(e) {
    e.preventDefault();
    if (link.length < 3) return alert("Deve haver um link! valido");
    const body = {
      link,
      description,
    };

    try {
      const promise = await axios.post(`${url}/post-link`, body, config);
      await apiHashtags.postTag(description, promise.data.id, config);
      setTimeline([...timeline]);
    } catch (err) {
      alert("There was an error publishing your link");
    }
    setLink("");
    setDescription("");
  }
  useInterval(() => {
    refreshPosts({
      page: "timeline",
      refresh_type: "top",
      newestTimestamp,
      oldestTimestamp,
      setNewestTimestamp,
      setOldestTimestamp,
      setLoading,
      timeline,
      setTimeline,
      newPosts,
      setNewPosts,
      token,
    });
  }, 5000);

  if (!timeline) return <>Loading</>;

  return (
    <>
      <Header />
      <UserPageContainer>
        <SearchBar />
        <TitleContainer>timeline</TitleContainer>
        <FeedContainer>
          <FeedWrapper>
            <StyledPost>
              <div>
                <img src={img} alt="vilao" />
                <p>What are you going to share today?</p>
              </div>
              <form onSubmit={handleForm}>
                <input
                  placeholder="https://..."
                  onChange={(e) => setLink(e.target.value)}
                  value={link}
                  type="url"
                />
                <input
                  className="description"
                  placeholder="Awesome article about #javascript"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
                <button type="submit">Publish</button>
              </form>
            </StyledPost>
            {newPosts[0]  && <RefreshButton loading={loading} timeline={timeline} newPosts={newPosts} setTimeline={setTimeline} setNewPosts={setNewPosts}/>}
            {timeline.map((object) => (
              <PostBox key={object.id} {...object} setTimeline={setTimeline} />
            ))}
          </FeedWrapper>
          <TrendingTags />
        </FeedContainer>
      </UserPageContainer>
    </>
  );
}

const StyledPost = styled.div`
  width: 611px;
  height: 209px;
  padding: 21px 86px;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: white;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 50px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    object-fit: cover;
    position: absolute;
    top: 16px;
    left: 18px;
  }

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
  }

  input {
    width: 503px;
    height: 30px;
    margin-top: 5px;
    border: none;
    border-radius: 5px;
    background: #efefef;

    text-justify: initial;

    padding: 5px 12px;
    box-sizing: border-box;

    &::placeholder {
      position: absolute;
      top: 5px;
      left: 12px;
      font-family: "Lato";
      font-weight: 300;
      font-size: 15px;
      line-height: 18px;
      color: #949494;
    }
  }

  .description {
    min-height: 66px;
  }

  button {
    width: 112px;
    height: 31px;
    border: none;
    border-radius: 5px;
    background: #1877f2;

    position: absolute;
    bottom: 16px;
    right: 22px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;

    color: #ffffff;
  }

  @media (max-width: 600px) {
    width: 100%;
    min-height: 164px;
    padding: 0px;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 0px;
    transition: all linear 0.2s;
    img {
      display: none;
    }

    p {
      margin-top: 10px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 345px;
      height: 120%;
      position: relative;
      margin-bottom: 20px;
    }

    input {
      width: 344px;
      margin-top: 5px;
    }
    .description {
      min-height: 47px;
    }
    button {
      bottom: -5px;
      right: 0px;
      height: 22px;
    }
  }

  @media (max-width: 600px) {
    min-width: 100%;
    min-height: 164px;
  }
`;
