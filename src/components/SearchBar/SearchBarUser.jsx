import { Link } from "react-router-dom";
import { SearchBarUserContainer } from "./SearchBarStyle";

export default function SearchBarUser({ id, name, pic_url }) {
  return (
    <Link to={`/user/${id}`}>
      <SearchBarUserContainer>
        <img src={pic_url} alt={name} />
        <p>{name}</p>
      </SearchBarUserContainer>
    </Link>
  );
}
