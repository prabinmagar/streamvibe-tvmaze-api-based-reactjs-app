import styled from "styled-components";
import { media, theme } from "../../../../styles/theme/theme";

export const GenreItemWrapper = styled.div`
  margin: 0 15px;

  ${media.lg`
        margin: 0 8px;
    `}

  .item-content {
    background: ${theme.colors.black10};
    padding: 20px;
    border-radius: 12px;

    ${media.lg`
            padding: 16px;
        `}

    ${media.sm`
            padding: 12px;
        `}

        .item-img {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(26, 26, 26, 0) 0%,
          #1a1a1a 101.79%
        );
      }
    }

    .item-body {
      padding: 2px 0;
    }

    .item-arrow-link {
      img {
        width: 18px;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
