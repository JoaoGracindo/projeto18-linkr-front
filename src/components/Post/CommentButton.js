import { AiOutlineComment } from "react-icons/ai";
import styled from "styled-components";

const commentButtonStyle = {
	color: "red",
	width: "25px",
	height: "25px",
};

export default function CommentButton({ commentsCount, post_id }) {
	return (
		<Container>
			<AiOutlineComment />
			<p>{commentsCount} comments</p>
		</Container>
	);
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:10px;

	svg {
		font-size: 25px;
		color: white;
		margin: 0 auto;
		outline: none;
		cursor: pointer;

		@media (max-width: 375px) {
			font-size: 20px;
		}
	}

	p {
		font-size: 11px;
		color: white;
		margin-top: 5px;
		@media (max-width: 375px) {
			font-size: 9px;
		}
	}
`;
