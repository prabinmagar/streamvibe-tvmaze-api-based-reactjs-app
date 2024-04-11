import styled from "styled-components";
import { media, theme } from "../../../styles/theme/theme";

export const ShowMetaDataWrapper = styled.div`
  width: 30%;

  ${media.xl`
        width: 100%;
    `}

  .block-item-title {
    column-gap: 8px;
    margin-bottom: 12px;

    .title-icon {
      min-width: 24px;
      width: 24px;
    }
  }

  .detail-block {
    display: grid;
    row-gap: 20px;
  }

  .block-item-body {
    gap: 8px;
  }

  .block-item-pill {
    display: inline-block;
    border-radius: 8px;
    border: 1px solid ${theme.colors.black15};
    background: #141414;
    padding: 6px 12px;
  }
`;
