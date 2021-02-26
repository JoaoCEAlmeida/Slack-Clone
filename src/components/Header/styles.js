import { Avatar } from "@material-ui/core";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

export const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const HeaderSearch = styled.div`
  flex: 0.4;
  display: flex;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  padding: 0;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
    flex: 1;
  }
`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
