import styled from "styled-components";
import { media, theme } from "../../../styles/theme/theme";

export const SubscriptionWrapper = styled.section`
  .subs-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    ${media.lg`
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
        `}

    ${media.sm`
            grid-template-columns: 100%;
        `}
  }
`;

export const SubscriptionItemWrapper = styled.section`
    border-radius: 12px;
    padding: 40px;
    border: 1px solid ${theme.colors.black15};

    ${media.lg`
        padding: 24px;
    `}

    ${media.sm`
        padding: 16px;
    `}

    .item-price{
        margin: 24px 0 32px 0;
        column-gap: 4px;

        ${media.lg`
            margin: 24px 0;
        `}

        &-text{
            font-size: 40px;

            ${media.lg`
                font-size: 24px;
            `}
        }
    }

    .item-btn-group{
        gap: 12px;
        
        .item-btn{
            flex: 1;
        }
    }
    
`;
