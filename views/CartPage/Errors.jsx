import { Row } from "reactstrap";
import styled from "styled-components";

const StyledInfo = styled.div`
  color: red;
`;

export const ErrorInfo = ({errors}) => {
  const error_code = errors.code
    ? errors.code.map(item => <StyledInfo>{item}</StyledInfo>)
    : null;
  const error_detail = errors.detail ? <StyledInfo>{errors.detail}</StyledInfo> : null;
  const error_email = errors.email
    ? errors.email.map(item => <StyledInfo>{item}</StyledInfo>)
    : null;

  return (
    <div>
      <Row>{error_code}</Row>
      <Row>{error_detail}</Row>
      <Row>{error_email}</Row>
    </div>
  );
};
