import * as React from "react";
import { Link } from "react-router-dom";
import {StyledButton} from './_style';

const Button = ({
  to,
  onClick,
  ...rest
}) => {
  return to ? (
    <Link to={to} {...rest} />
  ) : (
    <StyledButton onClick={onClick} {...rest} />
  );
};

export default Button;