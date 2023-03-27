import axios from "axios";
import { AiOutlineComment } from "react-icons/ai";
import styled from "styled-components";


export default function CommentButton({ commentsCount, id, setComments, setShowComments }) {
	const url = process.env.REACT_APP_API_URL;

	function getComments(){
		axios
			.get(`${url}/comment/${id}`)
			.then(response => {
				setComments([...response.data]);
				setShowComments(true);

			})
			.catch(err => {
				console.log(err)
			})
	}
	return (
		<Container onClick={getComments}>
			<AiOutlineComment />
			<p>{commentsCount} comments</p>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;

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
