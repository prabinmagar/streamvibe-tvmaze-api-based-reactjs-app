import styled from "styled-components";
import { media } from "../../../styles/theme/theme";

export const ShowMainDataWrapper = styled.div`
    width: 70%;

    ${media.xl`
        width: 100%;
    `}

    .detail-block-title{
        margin-bottom: 16px;
    }
`;