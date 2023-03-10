import { HeaderContainer, Options } from "../../components/Header/style";
import { useContext, useState } from "react";
import logo from "../../images/linkr-logo.png";
import { AiOutlineDown } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../../context/UserContext";

export default function Header() {

  const [ clicked, setClicked ] = useState(false)
  const { token } = useContext(TokenContext)
  const navigate = useNavigate()

 

  function click(){
    if(clicked){
      setClicked(false)
    }else{setClicked(true)}
  }

  function logout(){

    const config = { 
      headers:{
      authorization: `Bearer ${token}`
      }

      
  }
    axios.delete(`${process.env.REACT_APP_API_URL}/logout`,config)
    .then(() => {
      localStorage.removeItem("token")
      navigate("/")})
    .catch((error) => {console.log(error)})
  }
  
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <input type="text" placeholder={token} />
      <div>
        <AiOutlineDown onClick={click} clicked={clicked}/>
        <Options clicked={clicked}>
          <p to={"/"} onClick={logout}>Logout</p>
        </Options>
        <img
          src="https://e7.pngegg.com/pngimages/708/344/png-clipart-dogs-dogs.png"
          alt="user"
        />
      </div>
    </HeaderContainer>
  );
}
