import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
  margin-top: 60px;
`;

export const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    color: #49274b;
    padding: 8px;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }

  @media (max-width: 768px) {
    > .MuiSvgIcon-root {
      display: none;
    }
  }
`;

export const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    color: green;
    margin-top: 1px;
    margin-right: 2px;
  }
`;

export const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h4 {
    font-weight: 500;
  }
  > h4 > span {
    padding: 15px;
  }
  @media (max-width: 768px) {
    > .MuiSvgIcon-root {
      display: none;
    }
    > h3 {
      padding: 15px;
    }
  }
`;

export const SidebarOptionChannel = styled.h4`
  padding: 10px 0;
  font-weight: 300;
`;
