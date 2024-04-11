import styled from "styled-components";
import { media, theme } from "../../../styles/theme/theme";

export const SeasonItemWrapper = styled.div`
  border-radius: 12px;
  border: 1px solid ${theme.colors.black15};
  padding: 20px 30px;
  margin: 20px 0;

  ${media.lg`
        padding: 16px 20px;
    `}

  ${media.sm`
        padding: 16px;
    `}

    ${media.xs`
        padding: 12;
    `}

    .season-head {
    column-gap: 12px;

    &-title {
      gap: 10px;
      * {
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &-btn {
      border-radius: 100%;
      border: 1px solid #262626;
      background: #141414;
      width: 48px;
      height: 48px;

      img {
        width: 24px;
        ${media.sm`
                width: 20px;
            `}
      }

      ${media.lg`
            width: 40px;
            height: 40px;
        `}

      ${media.sm`
            width: 36px;
            height: 36px;
        `}
    }
  }

  .season-body {
    height: 0;
    overflow: hidden;
    transition: ${theme.transitions.allEaseInOut};

    &.show {
      height: 100%;
    }
  }
`;
