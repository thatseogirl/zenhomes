import styled from "styled-components";

export const SideNav = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  height: 100vh;
`;

export const StyledButton = styled.div`
  background-color: #0177ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 9px;
  text-align: center;
  gap: 20px;
  width: 200px;

  &:hover {
    opacity: 0.6;
  }
`;

export const UlFlex = styled.div`
  display: flex;
  margin: 20px;
  gap: 20px;
  flex-direction: column;
`;

export const StyledMargin = styled.div`
  margin-top: 40px;
`;
