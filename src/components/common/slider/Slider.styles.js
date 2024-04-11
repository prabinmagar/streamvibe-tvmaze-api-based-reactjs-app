import styled from "styled-components";
import { media, theme } from "../../../styles/theme/theme";

export const SliderWrapper = styled.div`
  .custom-prev-arrow,
  .custom-next-arrow {
    position: absolute;
    width: 56px;
    height: 56px;
    border-radius: 8px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    border: 1px solid ${theme.colors.black12};
    transition: ${theme.transitions.allEaseInOut};

    ${media.lg`
        width: 48px;
        height: 48px;
    `}

    img {
      width: 18px;
    }

    &:hover {
      transform: translateY(-50%) scale(0.95);
    }
  }

  .custom-prev-arrow {
    left: 8px;
    right: auto;

    ${media.lg`
        left: 0;
    `}
  }

  .custom-next-arrow {
    right: 8px;
    left: auto;

    ${media.lg`
        right: 0;
    `}
  }

  .slick-dots {
    margin-bottom: -20px;
    li {
      margin: 0 4px;
      height: auto !important;

      &.slick-active {
        button {
          &::before {
            background: ${theme.colors.primary};
          }
        }
      }
    }

    button {
      height: auto !important;
      &::before {
        width: 23px;
        height: 4px;
        border-radius: 100vh;
        background: #333;
        content: "";
        opacity: 1;
      }
    }
  }
`;
