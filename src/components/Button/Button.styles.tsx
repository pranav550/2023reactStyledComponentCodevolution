import styled from "styled-components";
interface ButtonProps {
  variant?: string;
}
export const StyledButton = styled.button<ButtonProps>`
  padding: 15px 30px;
  border: 2px solid green;
  background-color: ${(props) =>
    props.variant === "outline" ? "#fff" : "green"};
  color: ${(props) => (props.variant === "outline" ? "green" : "#fff")};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition: 0.5s all ease-out;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "green"};
    color: ${(props) => (props.variant !== "outline" ? "green" : "#fff")};
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "green"};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;
