import styled from "styled-components";
import { media, theme } from "../../../../styles/theme/theme";

export const ShowsBannerWrapper = styled.section`
  .banner-img {
    min-height: 74vh;
    border-radius: 12px;
    padding: 60px 40px;

    ${media.xl`
            padding: 40px 20px;
        `}

    ${media.lg`
            padding: 30px 20px;
        `}

        ${media.sm`
            padding: 20px 16px;
        `}
  }

  .banner-content {
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;

    .summary-text {
      color: ${theme.colors.white};

      p {
        ${media.lg`
            font-size: 16px!important;
        `}
      }
    }
  }

  .banner-title {
    text-shadow: 2px 2px 4px ${theme.colors.black15};
  }

  .banner-info {
    margin-top: 24px;
    row-gap: 16px;

    &-item {
      column-gap: 24px;
    }
  }

  .info-list {
    column-gap: 20px;
    row-gap: 8px;

    .info-item {
      column-gap: 8px;
    }
  }
`;
