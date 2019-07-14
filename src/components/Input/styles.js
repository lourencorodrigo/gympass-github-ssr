import styled from "styled-components";

import { em } from "../../styles/tools";

export const Wrapper = styled.div`
  background: #3c4352;
  width: 100%;
  height: ${em(60)};
  border-radius: ${em(40)};
  padding-right: ${em(10)};
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px ${em(12)} rgba(28, 28, 28, 0.24);
  transition: background 0.15s ease-in-out;

  &:hover {
    background: #353d4c;
  }
`;

export const ImageWrapper = styled.div`
  padding-left: ${em(16)};
`;

export const Image = styled.img`
  width: 30px;
`;

export const InputWrapper = styled.input`
  border: 0;
  background: transparent;
  width: 100%;
  text-align: center;
  outline-width: 0;
  font-weight: bold;
  font-size: ${em(24)};
  line-height: ${em(28)};
  height: 90%;
  color: #717888;
  font-family: "Roboto", sans-serif;

  ::placeholder {
    color: #717888;
    opacity: 0.5;
  }
`;
