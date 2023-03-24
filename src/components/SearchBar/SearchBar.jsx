import axios from "axios";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { SearchBarContainer, SearchBarResults } from "./SearchBarStyle";
import SearchBarUser from "./SearchBarUser";
import { AiOutlineClose } from "react-icons/ai";

export default function SearchBar() {
  const [namesSearched, setNamesSearched] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [displayResult, setDisplayResult] = useState(false);

  function searchUser(e) {
    setInputValue(e.target.value);
    if (e.target.value.length !== 0) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/${e.target.value}`)
        .then((response) => {
          setDisplayResult(true);
          setNamesSearched(response.data);
          console.log(response.data);
        })
        .catch((response) => {
          console.log(response.message);
        });
    } else {
      setDisplayResult(false);
    }
  }

  return (
    <SearchBarContainer>
      <DebounceInput
        type="text"
        minLength={3}
        debounceTimeout={300}
        placeholder="Search for people"
        value={inputValue}
        onChange={searchUser}
      />
      <AiOutlineClose
        onClick={() => {
          setInputValue("");
          setDisplayResult(false);
        }}
      />
      <SearchBarResults displayResult={displayResult}>
        {namesSearched.length !== 0 ? (
          namesSearched.map((n) => <SearchBarUser key={n.id} {...n} />)
        ) : (
          <p>Nenhum usuário encontrado</p>
        )}
      </SearchBarResults>
    </SearchBarContainer>
  );
}
