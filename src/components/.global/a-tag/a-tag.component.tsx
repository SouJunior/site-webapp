import React, { FC } from "react";
import Link from "next/link";

import { StyledLink } from "./a-tag.styled";
import { ATagProps } from "./types";

const ATag: FC<ATagProps> = ({ className, onClick, children }) => {
  return (
    <StyledLink className={className} onClick={onClick}>
      {children}
    </StyledLink>
  );
};

export default ATag;
