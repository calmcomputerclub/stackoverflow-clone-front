import { CSSObject } from "@emotion/react";
import styled from "@emotion/styled";

type Variant = "primary" | "secondary";
type Size = "sm" | "md";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, CSSObject> = {
  primary: {
    backgroundColor: "hsl(206, 100%, 52%)",
    ":hover": {
      backgroundColor: "#0074cc",
    },
    color: "white",
    boxShadow: "inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)",
    border: "1px solid hsl(206, 100%, 52%)",
  },
  secondary: {
    backgroundColor: "hsl(205,46%,92%)",
    ":hover": {
      filter: "contrast(70%)",
    },
    color: "hsl(205,47%,42%)",
    boxShadow: "inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)",
    border: "1px solid hsl(205,41%,63%)",
  },
};

const sizes: Record<Size, CSSObject> = {
  sm: {
    padding: "0.6em",
    fontSize: "12px",
  },
  md: {
    padding: "0.8em",
    fontSize: "13px",
  },
};

const Button = styled.button<ButtonProps>((props) => ({
  ...variants[props.variant ?? "primary"],
  ...sizes[props.size ?? "sm"],
  borderRadius: "3px",
  fontSize: "13px",
}));

export default Button;
