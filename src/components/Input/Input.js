import React from "react";

import { Wrapper, Image, InputWrapper, ImageWrapper } from "./styles";

const Input = ({ ...props }) => (
  <Wrapper>
    <ImageWrapper>
      <Image src="/static/images/search.svg" />
    </ImageWrapper>
    <InputWrapper {...props} />
  </Wrapper>
);

export default Input;
