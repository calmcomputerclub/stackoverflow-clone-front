import styled from "@emotion/styled";

interface InputProps {}

const Input = styled.input<InputProps>((props) => ({
  appearance: "none",
  width: "100%",
  padding: "0.6em 0.7em",
  backgroundColor: "white",
  color: "#0c0d0e;",
  borderRadius: "3px",
  border: "1px solid #babfc4;",
  fontSize: "13px",
}));

export default Input;
