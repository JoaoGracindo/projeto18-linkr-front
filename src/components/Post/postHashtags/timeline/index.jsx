import {
  PostBoxContainer,
  PostContentContainer,
  PostInfoContainer,
  UserInfoContainer
} from "./style";
import LikeButton from "../../LikeButton";
import {GoPencil} from 'react-icons/go';
import {FiTrash2} from 'react-icons/fi';
import axios from "axios";

export default function TimelinePost({pic_url, link, name, id}) {
  //const {url, title, image, description} = metadata;
  const token = JSON.parse(localStorage.token);
  const config = {
      headers: {
          "Authorization": `Bearer ${token}`
      }
  };

  console.log(token)
  const style = {    color: "white",}
  const url = process.env.REACT_APP_API_URL;
  function deletePost(id){

    axios.delete(`${url}/link/${id}`, config)
    .then((response) => {
      console.log(response)

    })
    .catch((response) => {
      console.log(response)
      alert("Cannot delete post. Try again later.")
    })
  }
  function editPost(id){
    axios.delete(`${url}/link/${id}`, config)
    .then((response) => {
      console.log(response)

    })
    .catch((response) => {
      console.log(response)
      alert("Cannot delete post. Try again later.")
    })

  }

  return (
    <PostBoxContainer>
      <PostInfoContainer>
        <img
          src={pic_url}
          alt={name}
        />
        <LikeButton />
      </PostInfoContainer>
      <div>
      <UserInfoContainer>
        <p>{name}</p>
        <GoPencil style={style} onClick={() => editPost(id)}/>
        <FiTrash2 style={style} onClick={() => deletePost(id)}/>
      </UserInfoContainer>
      <PostContentContainer onClick={() => window.open(link, "_blank")}>
        <div className="metadata">
          <div>
            <h3>Moderador, tira o muleke desse grupo AGORA</h3>
            <p>TIRA ESSE MLK JUNIN PELAMORDIDEUS MANO AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMe siga no Twitter/Instagram: @luckhaos</p>
            <p>{link}</p>
          </div>
          <img src="https://i.ytimg.com/vi/QG-gGjra3Vw/maxresdefault.jpg"/>
        </div>
      </PostContentContainer>
      </div>
    </PostBoxContainer>
  );
}



