import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1000px;
  display: flex;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: ${({ id, selectId }) => (id === selectId ? 700 : 400)};
  color: ${({ id, selectId, theme, variant }) =>
    id === selectId && variant === "primary"
      ? theme.COLORS.primary.blue
      : id === selectId
      ? theme.COLORS.primary.mint
      : "black"};
  padding-left: 30px;
`;

const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  border-bottom: ${({ id, selectId, theme, variant }) =>
    id === selectId && variant === "primary"
      ? `3px solid ${theme.COLORS.primary.blue}`
      : id === selectId
      ? `3px solid ${theme.COLORS.primary.mint}`
      : "none"};
  position: relative;
`;

const Circle = styled.div`
  background-color: ${({ theme, variant }) =>
    variant === "primary"
      ? theme.COLORS.primary.blue
      : theme.COLORS.primary.mint};
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  left: 15px;
`;
export const S = {
  Wrapper,
  TabWrapper,
  Text,
  Circle,
};
