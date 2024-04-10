import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { media, theme } from "../theme/theme";

const commonButtonStyles = css`
  font-family: inherit;
  min-width: 100px;
  height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid;
  padding: 3px 24px;
  column-gap: 8px;
  box-shadow: ${theme.shadows.medium};
  font-weight: 600;
  white-space: nowrap;
  border-radius: 6px;
  transition: ${theme.transitions.allEaseInOut};

  ${media.lg`
    min-width: auto;
    height: 46px;
    padding: 2px 18px;
  `}

  .btn-text {
    color: ${theme.colors.white};
    font-size: ${theme.typography.fontSize.large};

    ${media.lg`
      font-size: ${theme.typography.fontSize.medium}
    `}

    ${media.sm`
      font-size: ${theme.typography.fontSize.small}
    `}
  }

  .btn-icon {
    width: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.lg`
      width: 14px;
    `}
  }

  &:hover {
    color: ${theme.colors.white};
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.9;
    cursor: not-allowed;
  }
`;

const BaseButton = styled.button`
  ${commonButtonStyles};
`;

const BaseLink = styled(Link)`
  ${commonButtonStyles}
`;

const BaseButtonPrimary = styled(BaseButton)`
  background-color: ${theme.colors.primary};
  border-color: ${theme.colors.primary};
`;

const BaseLinkPrimary = styled(BaseLink)`
  background-color: ${theme.colors.primary};
  border-color: ${theme.colors.primary};
`;

const BaseButtonSecondary = styled(BaseButton)`
  background-color: ${theme.colors.secondary};
  border-color: ${theme.colors.black15};
`;

const BaseLinkSecondary = styled(BaseLink)`
  background-color: ${theme.colors.secondary};
  border-color: ${theme.colors.black15};
`;

export {
  BaseButton,
  BaseLink,
  BaseButtonPrimary,
  BaseLinkPrimary,
  BaseLinkSecondary,
  BaseButtonSecondary
};
