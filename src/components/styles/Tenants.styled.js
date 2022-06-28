import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 1100px;
    height: 90vh;
    overflow: scroll;
    margin-top: 30px;

`;

export const Color = styled.span`
    color: #0177ff;
`
