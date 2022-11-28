import styled, { css } from "styled-components";

interface CardWrapperProps {
  isActive: boolean;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  display: inline-block;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
  width: 20%;
  min-width: 230px;
  height: 250px;
  background: white;
  color: black;
  border: 2px solid black;
  ${(props) =>
    props.isActive &&
    css`
      background: palevioletred;
      border: 2px solid red;
    `}
`;

export const SongWrapper = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;
