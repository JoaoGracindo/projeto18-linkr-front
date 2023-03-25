import { useNavigate } from "react-router-dom";
import { SearchBarUserContainer } from "./SearchBarStyle";

export default function SearchBarUser({ id, name, pic_url, setDisplayResult, setInputValue }) {
  const navigate = useNavigate();

  function goToUserPage() {
    navigate(`/user/${id}`);
    setDisplayResult(false);
    setInputValue("");
  }

  return (
    <SearchBarUserContainer onClick={goToUserPage}>
      <img src={pic_url} alt={name} />
      <p>{name}</p>
    </SearchBarUserContainer>
  );
}
