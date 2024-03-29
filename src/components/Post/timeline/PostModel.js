import styled from "styled-components";
import { GoPencil } from "react-icons/go";
import { FiTrash2 } from "react-icons/fi";
import { SlPaperPlane } from "react-icons/sl";
import axios from "axios";
import Modal from "react-modal";

import LikeButton from "../LikeButton";
import { useState } from "react";
import ShareButton from "../ShareButton";
import PostHashtags from "../postHashtags/postHashtags";
import CommentButton from "../CommentButton";

Modal.setAppElement("#root");

export default function PostComponent({
	id,
	owner,
	pic_url,
	name,
	description,
	reposted_by,
	reposted_by_name,
	origin_post_id,
	repost_count,
	url_metadata,
	liked,
	likersNames,
	likesCount,
	commentsCount,
	setTimeline,
}) {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [editMode, setEditMode] = useState(false);
	const [newDescription, setNewDescription] = useState(description);
	const [shownDescription, setShownDescription] = useState(description);
	const [disable, setDisable] = useState(false);
	const [loading, setLoading] = useState(false);
	const [comments, setComments] = useState([]);
	const [showComments, setShowComments] = useState(false);
	const [newComment, setNewComment] = useState("");

	const userImg = JSON.parse(localStorage.img);
	const token = JSON.parse(localStorage.token);
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const userId = JSON.parse(localStorage.id);
	const url = process.env.REACT_APP_API_URL;

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	function refreshTimeline() {
		axios
			.get(`${url}/timeline`, config)
			.then((response) => {
				setTimeline([...response.data]);
				closeModal();
				setLoading(false);
			})
			.catch((err) => {
				alert(
					"An error occured while trying to fetch the posts, please refresh the page"
				);
			});
	}

	async function handleKeyPress(e) {
		if (e.key === "Enter") {
			setDisable(true);
			await editPost(id);
			setDisable(false);
			setEditMode(!editMode);
		}
		if (e.key === "Escape") {
			setEditMode(!editMode);
			setNewDescription(description);
		}
	}

	function deletePost(id) {
		setLoading(true);
		axios
			.delete(`${url}/link/${id}`, config)
			.then((response) => {
				refreshTimeline();
				console.log(response);
			})
			.catch((response) => {
				console.log(response);
				setLoading(false);
				alert("Cannot delete post. Try again later.");
			});
	}
	function editPost(id) {
		axios
			.put(`${url}/link/${id}`, { description: newDescription }, config)
			.then((response) => {
				console.log(response);
				setShownDescription(newDescription);
			})
			.catch((response) => {
				console.log(response);
				alert("Cannot edit post. Try again later.");
			});
	}

	function postComment() {
		axios
		.post(`${url}/comment/${id}`, {comment: newComment}, config)
		.then((response) => {
			setComments([...response.data]);
			setNewComment("");
		})
		.catch((err) => {
			alert(err);
		});
	}

	return (
		<StyledPost notOwner={owner !== userId}>
			{reposted_by && (
				<ShareBar>
					<div>
						<img src="assets/share.svg" />
						<p>
							Re-posted by{" "}
							<span>{userId == reposted_by ? "You" : reposted_by_name}</span>
						</p>
					</div>
				</ShareBar>
			)}

			<div className="leftContainer">
				<img
					className="user-img"
					src={pic_url}
					alt={`${name}'s`}
				/>
				<LikeButton
					post_id={id}
					liked={liked}
					likersNames={likersNames}
					likesCount={likesCount}
				/>
				<CommentButton
					setComments={setComments}
					id={id}
					commentsCount={commentsCount}
					setShowComments={setShowComments}
				/>
				<ShareButton
					post_id={id}
					origin={origin_post_id}
					count={repost_count}
					refreshTimeline={refreshTimeline}
				/>
			</div>
			<div className="rightWrapper">
				<div className="nameContainer">
					<p>{name}</p>
					<div className="post-options">
						<GoPencil
							onClick={() => {
								setEditMode(!editMode);
								setNewDescription(shownDescription);
							}}
						/>
						<FiTrash2 onClick={openModal} />
					</div>
				</div>
				<div className="contentContainer">
					{editMode ? (
						<input
							onChange={(e) => setNewDescription(e.target.value)}
							value={newDescription}
							autoFocus
							onKeyDown={handleKeyPress}
							disabled={disable}
							className="editInput"
						/>
					) : (
						<div className="description">
							<PostHashtags>
								<p>{shownDescription}</p>
							</PostHashtags>
						</div>
					)}
					<div
						className="link"
						onClick={() => window.open(url_metadata.url, "_blank")}>
						<div className="metadata-text">
							<div className="metadata-title">{url_metadata.title}</div>
							<div className="metadata-description">
								{url_metadata.description}
							</div>
							<div className="metadata-url">
								<a
									href={`${url_metadata.url}`}
									target="_blank"
									rel="noreferrer">
									{url_metadata.url}
								</a>
							</div>
						</div>
						<img
							className="metadata-img"
							src={`${url_metadata.image}`}
							alt={`${url_metadata.image}`}
						/>
					</div>
				</div>
			</div>
			<CommentsContainer show={showComments}>
				{comments.map((obj, index) => {
					return (
						<div
							key={index}
							className="comment">
							<img src={obj.pic_url} />
							<div>
								<h1>{obj.name}</h1>
								<p>{obj.comment}</p>
							</div>
						</div>
					);
				})}
				<div className="input">
					<img src={userImg} />
					<input
						placeholder="write a comment..."
						onChange={(e) => setNewComment(e.target.value)}
						value={newComment}
					/>
					<SlPaperPlane onClick={postComment}/>
				</div>
			</CommentsContainer>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={modalStyle}>
				{loading ? (
					<h1 style={modalTitle}>Loading...</h1>
				) : (
					<>
						<h1 style={modalTitle}>
							Are you sure you want <br /> to delete this post?
						</h1>
						<div>
							<button
								style={modalCancel}
								onClick={closeModal}>
								No, go back
							</button>
							<button
								style={modalConfirm}
								onClick={() => deletePost(id)}>
								Yes, delete it
							</button>
						</div>
					</>
				)}
			</Modal>
		</StyledPost>
	);
}

const modalStyle = {
	content: {
		width: "597px",
		height: "262px",
		background: "#333333",
		borderRadius: "50px",
		position: "fixed",
		margin: "auto",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
};

const modalTitle = {
	fontFamily: "Lato",
	fontStyle: "normal",
	fontWeight: "700",
	fontSize: "34px",
	color: "white",
	marginBottom: "15px",
};
const modalCancel = {
	width: "134px",
	height: "37px",
	background: "#FFFFFF",
	borderRadius: "5px",
	fontFamily: "Lato",
	fontStyle: "normal",
	fontWeight: "700",
	fontSize: "18px",
	border: "none",
	margin: "0 7px",
	color: "#1877F2",
};
const modalConfirm = {
	width: "134px",
	height: "37px",
	background: "#1877F2",
	borderRadius: "5px",
	fontFamily: "Lato",
	fontStyle: "normal",
	fontWeight: "700",
	fontSize: "18px",
	border: "none",
	margin: "0 7px",
	color: "#FFFFFF",
};

const CommentsContainer = styled.div`
	${(props) => {
		if (!props.show) return "display: none;";
	}}
	position: absolute;
	padding-top: 5%;
	top: 95%;
	width: 100%;
	height: fit-content;
	z-index: -1;
	background-color: #1e1e1e;
	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;

	.comment {
		display: flex;
		align-items: center;
		margin-left: 25px;
		margin-right: 25px;
		min-height: 70px;
		border-bottom: 1px solid #353535;

		div {
			margin-left: 18px;
		}

		h1 {
			font-weight: 700;
			font-size: 14px;
			line-height: 17px;
			color: #f3f3f3;
			margin-bottom: 3px;
		}

		p {
			font-weight: 400;
			font-size: 14px;
			line-height: 17px;
			color: #acacac;
		}
	}

	.input {
		display: flex;
		align-items: center;
		margin-left: 25px;
		margin-right: 25px;
		height: 70px;

		input {
			margin-left: 18px;
			margin-right: 18px;
			width: 100%;
			background: #252525;
			border-radius: 8px;
			padding-left: 15px;
			padding-right: 13px;
			font-style: italic;
			font-weight: 400;
			font-size: 14px;
			line-height: 17px;
			letter-spacing: 0.05em;
			color: white;
			border: none;
			height: 40px;
		}

		svg {
			font-size: 25px;
			color: white;
			cursor: pointer;
		}
	}

	img {
		height: 40px;
		width: 40px;
		border-radius: 50%;
	}

`;

const StyledPost = styled.div`
	width: 611px;
	height: fit-content;
	background-color: #171717;
	border-radius: 16px;
	display: flex;
	font-family: Lato, "sans-serif";
	color: white;
	position: relative;

	.editInput {
		box-sizing: border-box;
		width: 100%;
		min-height: 20px;
		max-height: fit-content;
		line-break: anywhere;
		border-radius: 7px;
		font-family: "Lato";
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		color: #4c4c4c;
		word-break: break-all;
	}

	@media (max-width: 375px) {
		min-height: 232px;
		max-height: fit-content;
		width: 100vw;
	}
	@media (max-width: 375px) {
		width: 100vw;
		border: none;
		border-radius: 0px;
	}
	@media (max-width: 611px) {
		width: 100vw;
	}
	.user-img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-top: 17px;
		object-fit: cover;
		@media (max-width: 375px) {
			width: 40px;
			height: 40px;
		}
	}
	.leftContainer {
		width: 86px;
		height: 276px;
		display: flex;
		flex-direction: column;
		align-items: center;
		@media (max-width: 375px) {
			width: 70px;
			height: 100%;
		}
	}
	.rightWrapper {
		width: 503px;
		height: 100%;
		background-color: inherit;
		display: flex;
		flex-direction: column;
		@media (max-width: 375px) {
			width: 288px;
		}
	}
	.nameContainer {
		width: 100%;
		height: 23px;
		margin-top: 19px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 19px;
		@media (max-width: 667px) {
			margin-top: 10px;
		}
	}
	.post-options {
		width: 50px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: white;
		${(props) => {
			if (props.notOwner) return "display: none;";
		}}
		@media (max-width: 667px) {
			display: none;
		}
	}
	.contentContainer {
		width: 100%;
		margin-top: 7px;
		display: flex;
		flex-direction: column;
		gap: 10px 0px;
		@media (max-width: 375px) {
			height: 190px;
		}
	}
	.description {
		box-sizing: border-box;
		width: 100%;
		min-height: 20px;
		max-height: fit-content;
		word-break: break-all;
		border-radius: 7px;
		color: #b7b7b7;
	}
	.link {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		width: 100%;
		height: 155px;
		background-color: inherit;
		margin-bottom: 20px;
		border-radius: 11px;
		border: 1px solid #4d4d4d;
		position: relative;
		@media (max-width: 375px) {
			height: 115px;
			margin-bottom: 0px;
		}
	}

	.metadata-img {
		box-sizing: border-box;
		position: absolute;
		top: -1px;
		right: -1px;
		width: 155px;
		height: 155px;
		border-radius: 0px 11px 11px 0px;
		border: 1px solid #4d4d4d;
		border-left: none;
		@media (max-width: 375px) {
			width: 95px;
			height: 115px;
		}
	}
	.metadata-text {
		width: 348px;
		height: 155px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 25px 23px 24px 19px;
		@media (max-width: 375px) {
			height: 110px;
			width: 175px;
			padding: 0px;
			margin-left: 10px;
		}
	}
	.metadata-title {
		box-sizing: border-box;
		width: 100%;
		min-height: 38px;
		color: #cecece;
		font-size: 16px;
		white-space: normal;
		word-wrap: break-word;
		text-overflow: ellipsis;
		overflow-y: hidden;
		@media (max-width: 375px) {
			font-size: 11px;
			min-height: 26px;
		}
	}
	.metadata-description {
		font-size: 11px;
		height: 40px;
		color: #9b9595;
		display: flex;
		line-break: anywhere;
		align-items: flex-start;
		@media (max-width: 375px) {
			font-size: 9px;
		}
	}
	.metadata-url {
		min-height: 13px;
		overflow-x: hidden;
		overflow-y: hidden;
		font-size: 11px;
		color: #cecece;
		padding-top: 13.6px;
		a {
			color: inherit;
			text-decoration: none;
		}
		a:link:active,
		a:visited:active {
			color: none;
		}
		@media (max-width: 375px) {
			font-size: 9px;
		}
	}
`;

const ShareBar = styled.div`
	width: 611px;
	height: 50px;
	position: absolute;
	top: -33px;
	left: 0px;
	background-color: #1e1e1e;
	border-radius: 16px 16px 0px 0px;
	z-index: -1;

	div {
		display: flex;
		align-items: center;
		margin: 11px 13px;
	}

	img {
		width: 20px;
		height: 12px;
		margin-right: 6px;
	}

	p {
		font-family: "Lato";
		font-size: 11px;
		line-height: 13px;
		color: #ffffff;
	}

	span {
		font-weight: 700;
	}

	@media (max-width: 611px) {
		width: 100vw;
	}
`;
