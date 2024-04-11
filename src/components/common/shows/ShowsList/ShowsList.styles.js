import styled from "styled-components";
import { media, theme } from "../../../../styles/theme/theme";

export const PaginationWrapper = styled.div`
  margin-top: 40px;

  ${media.sm`
        column-gap: 8px;
    `}

  .paginate-btn {
    width: 48px;
    height: 48px;
    border-radius: 0;
    border: 1px solid ${theme.colors.black15};
    background: ${theme.colors.secondary};

    &.active {
      background: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }

  .paginate-prev,
  .paginate-next {
    img {
      width: 20px;
    }

    ${media.sm`
        border-radius: 6px;
    `}
  }

  .paginate-prev {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .paginate-next {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .paginate-num {
    ${media.sm`
        display: none;
    `}
  }
`;

export const ShowsListWrapper = styled.div`
  .shows-list {
    grid-template-columns: repeat(5, 1fr);
    row-gap: 20px;

    ${media.xxl`
            grid-template-columns: repeat(4, 1fr);
        `}

    ${media.xl`
            grid-template-columns: repeat(3, 1fr);
        `}

        ${media.lg`
            grid-template-columns: repeat(2, 1fr);
        `}

        ${media.sm`
            grid-template-columns: 100%;
        `}
  }
`;
