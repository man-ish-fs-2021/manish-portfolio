import React from "react";
import styled from "styled-components";

const StyledA = styled.a`
  text-decoration: none;
  color: ${(props) => props.color};
  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;

const AnchorStyled = ({
  href,
  color,
  children,
  hoverColor = "white",
  ...props
}) => {
  return (
    <StyledA href={href} color={color} hoverColor={hoverColor} {...props}>
      {children}
    </StyledA>
  );
};

export default AnchorStyled;
