import styled from "styled-components";
import { media, theme } from "../../../styles/theme/theme";

export const EpisodeItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  gap: 20px;
  padding: 30px 0;
  border-top: 1px solid ${theme.colors.black15};

  ${media.lg`
        gap: 16px;
        padding: 20px 0;
        grid-template-columns: 30px auto;
    `}

  ${media.sm`
        gap: 10px;
        padding: 16px 0;
        grid-template-columns: 24px auto;
    `}

    ${media.xs`
        
        grid-template-columns: 100%;
    `}

    .episode-full {
    grid-template-columns: 160px auto;
    column-gap: 20px;
    row-gap: 12px;

    ${media.lg`
            gap: 12px;
            grid-template-columns: 120px auto;
        `}

    ${media.md`
            grid-template-columns: 100px auto;
        `}

        ${media.sm`
            grid-template-columns: 100%;
        `}
  }

  .episode-title {
    margin-top: 0;
  }

  .episode-img {
    border-radius: 6px;
    border: 1px solid ${theme.colors.black15};
    height: 110px;
    overflow: hidden;

    ${media.lg`
            height: 100px;
        `}

    ${media.md`
            height: 80px;
        `}
  }

  .episode-summary {
    p {
      font-size: 15px;

      ${media.lg`
                font-size: 14px;
            `}
    }
  }
`;
