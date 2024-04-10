import styled from 'styled-components';
import { Images } from '../../../assets/images';
import { media } from '../../../styles/theme/theme';

export const BannerWrapper = styled.section`
    .banner-img{
        background: url(${Images.HomeBanner}) center/cover no-repeat fixed;
        min-height: 68vh;

        ${media.sm`
            min-height: 50vh;
        `}
    }

    .banner-icon{
        width: 260px;
        margin-top: 100px;

        ${media.xl`
            width: 220px;
        `}

        ${media.lg`
            width: 180px;
        `}

        ${media.sm`
            width: 120px;
        `}
    }

    .banner-content{
        max-width: 1096px;
        padding-top: 20px;
        padding-bottom: 40px;

        ${media.sm`
            padding-bottom: 20px;
        `}
    }

    .banner-text{
        margin-bottom: 50px;

        ${media.lg`
            margin-bottom: 30px;
        `}

        ${media.sm`
            margin-bottom: 20px;
        `}
    }
`;