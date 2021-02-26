import React from "react";
import { Search, HelpOutline } from "@material-ui/icons";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderSearch,
  HeaderRight,
  HeaderAvatar,
} from "./styles";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => {
            auth.signOut();
          }}
          src={user?.photoURL}
          alt={user?.displayName}
        />
      </HeaderLeft>
      <HeaderSearch>
        <Search />
        <input placeholder="Search..." />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
