import * as React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../images/logo.png";
import * as Styled from "./styled";

function Header() {
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <input
        type="image"
        className="headerLogo"
        src={Logo}
        alt="Logo"
        onClick={() => navigate("/")}
      />
    </Styled.Container>
  );
}

export default Header;
