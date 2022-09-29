import styled from "@emotion/styled";
import type { CSSObject } from "@emotion/styled";
import { css } from "@emotion/react";

interface ButtonProps {
  variants?: "primary" | "secondary";
}

// const variantsMap: Record<string, CSSObject> = {
//   primary: {
//     backgroundColor: "hsl(206,100%,52%)",
//     color: "white",
//     boxShadow: "inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)",
//     "&:hover": "#0074cc",
//   },
// };
// padding: "0.8em",
//       borderRadius: "3px",
//       fontSize: "13px",

const primaryStyle = (props) => css``;

const Button = styled.button<ButtonProps>``;

export default Button;

// Object style
