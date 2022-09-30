import { CSSObject } from "@emotion/react";
import styled from "@emotion/styled";

type Variants = "primary" | "secondary";

interface ButtonProps {
  variants?: Variants;
}

const variants: Record<Variants, CSSObject> = {
  primary: {
    backgroundColor: "hsl(206, 100%, 52%)",
    ":hover": {
      backgroundColor: "#0074cc",
    },
    color: "white",
    boxShadow: "inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)",
  },
  secondary: {},
};

const Button = styled.button<ButtonProps>((props) => ({
  ...variants[props.variants ?? "primary"],
  padding: "0.8em",
  borderRadius: "3px",
  fontSize: "13px",
}));

export default Button;
