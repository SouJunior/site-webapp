import styled from "styled-components";

export const StyledLink = styled.a`
  color: #1d4ed8;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    background-color: #153e75;
  }

  &.join-button {
    padding: 0.5rem 1rem;
    background-color: #1d4ed8;
    color: white;
    border-radius: 20px;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
  }
`;
