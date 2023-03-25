import { HeaderContainer, Options } from "../../components/Header/style";
import { useContext, useState } from "react";
import logo from "../../images/linkr-logo.png";
import { AiOutlineDown } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../../context/UserContext";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
	const [clicked, setClicked] = useState(false);
	const { token, img } = useContext(TokenContext);
	const navigate = useNavigate();

	function click() {
		setClicked(!clicked);
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
			<Link to={"/timeline"}>
				<img
					src={logo}
					alt="logo"
				/>
			</Link>
			<SearchBar />
			<div onClick={click}>
				<AiOutlineDown clicked={clicked} />

				<img
					src={img}
					alt="user"
				/>
			</div>
			<Options clicked={clicked}>
				<p onClick={logout}>Logout</p>
			</Options>
		</HeaderContainer>
	);
}
