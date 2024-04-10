import styled from "styled-components";
import { media } from "../../../styles/theme/theme";

export const SectionTitleWrapper = styled.div`
  margin-bottom: 40px;

  ${media.lg`
    margin-bottom: 30px;
    `}

  ${media.xs`
    margin-bottom: 20px;
    `}

    .title-grid {
    gap: 20px;
  }

  .title-left {
    max-width: 992px;
    margin-right: auto;
  }
`;
