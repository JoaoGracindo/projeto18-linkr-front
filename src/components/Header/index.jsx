import { HeaderContainer, Options } from "../../components/Header/style";
import { useContext, useState } from "react";
import logo from "../../images/linkr-logo.png";
import { AiOutlineDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../../context/UserContext";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
  const [clicked, setClicked] = useState(false);
  const { token } = useContext(TokenContext);
  const navigate = useNavigate();

  function click() {
    setClicked(!clicked)
  }

  function logout() {
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`${process.env.REACT_APP_API_URL}/logout`, config)
      .then(() => {
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <SearchBar />
      <div onClick={click}>
        <AiOutlineDown clicked={clicked} />

        <img
          src="https://e7.pngegg.com/pngimages/708/344/png-clipart-dogs-dogs.png"
          alt="user"
        />
      </div>
      <Options clicked={clicked}>
        <p onClick={logout}>Logout</p>
      </Options>
    </HeaderContainer>
  );
}
