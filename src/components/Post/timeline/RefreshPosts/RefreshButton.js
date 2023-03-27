import styled from "styled-components";
import { BiRefresh } from "react-icons/bi";
import { ThreeDots } from "react-loader-spinner";

export default function RefreshButton({
  loading,
  newPosts,
  setTimeline,
  setNewPosts,
  timeline
}) {
  const fetchPosts = () => {
    setTimeline(newPosts.concat(timeline))
    setNewPosts([])
  }
  return (
    <Container onClick={fetchPosts} loading={loading}>
      {loading ? (
        <>
          <ThreeDots
            height="160"
            width="160"
            color="white"
            ariaLabel="three-dots-loading"
          />
        </>
      ) : (
        <>
          <p>{`${newPosts.length} new posts, load more!`}</p>
          <BiRefresh />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 611px;
  height: 61px;
  background-color: #1877f2;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Lato", sans-serif;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  svg {
    width: ${(props) => (props.loading ? "60px" : "25px")};
    height: 25px;
    margin-left: 10px;
    margin-top: 2px;
  }
`;
