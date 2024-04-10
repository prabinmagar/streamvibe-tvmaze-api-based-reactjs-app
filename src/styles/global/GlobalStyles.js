// # Global styles (CSS, fonts, etc.)
import { createGlobalStyle } from "styled-components";
import { media } from "../theme/theme";
import { theme } from "../theme/theme";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    /* body styles */
    body {
        background: ${theme.colors.secondary};
        color: ${theme.colors.white};
        font-family: ${theme.typography.fontFamily};
        line-height: ${theme.typography.lineHeight.medium};
    }

    ul {
        list-style: none;
    }

    img{
        width: 100%;
        display: block;
        max-width: 100%;
    }
    
    /* Link styles */
    a {
        color: ${theme.colors.white};
        text-decoration: none;
        transition: ${theme.transitions.allEaseInOut};

        &:hover {
            color: ${theme.colors.white};
            opacity: 0.9;
        }
    }

    /* Typography styles */
    h1, h2, h3, h4, h5, h6 {
        margin-top: ${theme.spacing.md};
        margin-bottom: ${theme.spacing.sm};
        font-weight: ${theme.typography.fontWeight.bold};
        color: ${theme.colors.white};
        line-height: 1.4;
    }
    h1 {
        font-size: ${theme.typography.fontSize.superTitle};
    }

    h2 {
        font-size: ${theme.typography.fontSize.title};
    }

    h3 {
        font-size: ${theme.typography.fontSize.xxlarge};
    }

    p {
        font-size: ${theme.typography.fontSize.large};
        line-height: ${theme.typography.lineHeight.medium};
    }

    /* Button styles */
    button {
        border: none;
        border-radius: ${theme.borders.radius};
        cursor: pointer;
        transition: ${theme.allEaseInOut};
        outline: 0;
    }

    /* ### utility classes ### */
    /* flexbox and grid */
    .flex {
        display: flex;
        &-col {
            flex-direction: column;
        }
        &-wrap {
            flex-wrap: wrap;
        }
    }
    .inline{
        display: inline;
    }
    .inline-block{
        display: inline-block;
    }
    .inline-flex {
        display: inline-flex;
    }
    .block{
        display: block;
    }

    .items {
        &-center {
            align-items: center;
        }
        &-start {
            align-items: flex-start;
        }
        &-end {
            align-items: flex-end;
        }
        &-stretch {
            align-items: stretch;
        }
        &-baseline{
            align-items: baseline;
        }
    }

    .justify {
        &-center {
            justify-content: center;
        }
        &-between {
            justify-content: space-between;
        }
        &-start {
            justify-content: flex-start;
        }
        &-end {
            justify-content: flex-end;
        }
    }

    .grid {
        display: grid;
    }

    .object-fit-cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        object-position: top;
    }
    .no-wrap {
        white-space: nowrap;
    }
    
    // heights and width
    .h-full {
        height: 100%;
    }

    .w-full {
        width: 100%;
    }

    /* margin auto */
    .mx-auto{
        margin-left: auto;
        margin-right: auto;
    }

    // font weights
    .font-extralight {
        font-weight: ${theme.typography.fontWeight.extraLight};
    }
    .font-light {
        font-weight: ${theme.typography.fontWeight.light};
    }
    .font-regular {
        font-weight: ${theme.typography.fontWeight.regular};
    }
    .font-medium {
        font-weight: ${theme.typography.fontWeight.medium};
    }
    .font-semibold {
        font-weight: ${theme.typography.fontWeight.semibold};
    }
    .font-bold {
        font-weight: ${theme.typography.fontWeight.bold};
    }
    
    // text color classes
    .text-primary{
        color: ${theme.colors.primary};
    }
    .text-secondary{
        color: ${theme.colors.secondary};
    }
    .text-white{
        color: ${theme.colors.white};
    }
    .text-black{
        color: ${theme.colors.primary};
    }
    .text-gray60{
        color: ${theme.colors.gray60};
    }

    // text realted classes
    .text-start {
        text-align: left;
    }
    .text-end {
        text-align: right;
    }
    .text-underline {
        text-decoration: underline;
    }
    .text-center {
        text-align: center;
    }

    .uppercase {
        text-transform: uppercase;
    }
    .capitalize {
        text-transform: capitalize;
    }
    .italic {
        font-style: italic;
    }

    // background classes
    .bg-transparent{
        background-color: transparent;
    }
    .bg-primary{
        background-color: ${theme.colors.primary};
    }
    .bg-secondary{
        background-color: ${theme.colors.secondary};
    }
    .bg-white{
        background-color: ${theme.colors.white};
    }
    .bg-black{
        background-color: ${theme.colors.primary};
    }
    .bg-black06{
        background-color: ${theme.colors.black06};
    }
    .bg-black10{
        background-color: ${theme.colors.black10};
    }
    .bg-black12{
        background-color: ${theme.colors.black12};
    }

    // text size classes
    .text-xs{
        font-size: ${theme.typography.fontSize.xsmall}!important;
    }
    .text-sm{
        font-size: ${theme.typography.fontSize.small}!important;
    }
    .text-md{
        font-size: ${theme.typography.fontSize.medium}!important;
    }
    .text-lg{
        font-size: ${theme.typography.fontSize.large}!important;
    }
    .text-xl{
        font-size: ${theme.typography.fontSize.xlarge}!important;
    }

    ${media.lg`
        .text-xs{
            font-size: ${theme.typography.fontSize.xxsmall}!important;
        }
        .text-sm{
            font-size: ${theme.typography.fontSize.xsmall}!important;
        }
        .text-md{
            font-size: ${theme.typography.fontSize.small}!important;
        }
        .text-lg{
            font-size: ${theme.typography.fontSize.medium}!important;
        }
        .text-xl{
            font-size: ${theme.typography.fontSize.large}!important;
        }
    `}

    ${media.lg`
        .text-sm{
            font-size: ${theme.typography.fontSize.xxsmall}!important;
        }
        .text-md{
            font-size: ${theme.typography.fontSize.xsmall}!important;
        }
        .text-lg{
            font-size: ${theme.typography.fontSize.small}!important;
        }
        .text-xl{
            font-size: ${theme.typography.fontSize.medium}!important;
        }
    `}

    .section-py{
        padding: 60px 0;

        ${media.xxl`
            padding: 50px 0;
        `}

        ${media.lg`
            padding: 40px 0;
        `}

        ${media.sm`
            padding: 30px 0;
        `}

        ${media.xs`
            padding: 20px 0;
        `}
    }

    .top-spacing-fix{
        margin-top: 120px;

        ${media.lg`
            margin-top: 100px;
        `}

        ${media.sm`
            margin-top: 80px;
        `}
    }
`;
