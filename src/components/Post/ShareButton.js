import styled from "styled-components"
import axios from "axios"
import Modal from "react-modal";
import { useState } from "react";



export default function ShareButton(props){

  const { post_id,count,refreshTimeline, origin } = props

  const url = process.env.REACT_APP_API_URL
  const token = JSON.parse(localStorage.token);
  const user_id = JSON.parse(localStorage.id);

  const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

  const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

  function share(post_id,origin){
    if(!origin){
      axios
			.post(`${url}/repost-link`, {user_id,post_id} ,config)
			.then((response) => {
				console.log(response);
			})
			.catch((response) => {
				console.log(response);
				alert("Cannot repost this post. Try again later.");
			});}

    else{
      axios
			.post(`${url}/repost-link`, {user_id,post_id:origin} ,config)
			.then((response) => {
				console.log(response);
			})
			.catch((response) => {
				console.log(response);
				alert("Cannot repost this post. Try again later.");
			});
    }

    refreshTimeline()
  }

    return(
      <>
        <ShareStyled onClick={openModal}>
            <img src="assets/share.svg" alt="share"/>
            <p>{count} re-posts</p>
        </ShareStyled>
        <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={modalStyle}>
              <h1 style={modalTitle}>
              Do you want to re-post this link?
              </h1>
              <div>
                <button
                  style={modalCancel}
                  onClick={closeModal}>
                  No, cancel
                </button>
                <button
                  style={modalConfirm}
                  onClick={() => {
                    share(post_id,origin)
                    closeModal()
                    }}>
                  Yes, share!
                </button>
              </div>
            </Modal>
      </>
    )
}

const ShareStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 22px 0px;
    cursor: pointer;

    img{
      width: 20px;
      height: 12px;
      color: white;
      margin-bottom: 5px;
    }

    p{
      font-family: 'Lato';
      font-weight: 400;
      font-size: 11px;
      line-height: 13px;
      text-align: center;
      color: #FFFFFF;
    }

`
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
  alignItems: "center"

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