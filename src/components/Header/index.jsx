import { HeaderContainer } from "../../components/Header/style";
import logo from "../../images/linkr-logo.png";
import { AiOutlineDown } from "react-icons/ai";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <input type="text" placeholder="Pesquise um usuário" />
      <div>
        <AiOutlineDown />
        <img
          src="https://e7.pngegg.com/pngimages/708/344/png-clipart-dogs-dogs.png"
          alt="user"
        />
      </div>
    </HeaderContainer>
  );
}
