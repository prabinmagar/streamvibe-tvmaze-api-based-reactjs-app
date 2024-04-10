import styled from "styled-components";
import { media, theme } from "../../../styles/theme/theme";

export const CommonQWrapper = styled.section`
  .common-q-list {
    grid-template-columns: repeat(2, 1fr);

    .q-list-one,
    .q-list-two {
      .item {
        &:last-child {
          &::after {
            display: none;
          }
        }
      }
    }

    ${media.lg`
        grid-template-columns: 100%;

        .q-list-one{
            .item{
                &:last-child{
                    &::after{
                        display: block;
                    }
                }
            }
        }
    `}
  }
`;

export const CommonQItemWrapper = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(229, 0, 0, 0) 0%,
      #e50000 16.67%,
      rgba(229, 0, 0, 0) 100%
    );
  }

  &.no-b-gradient {
    &::after {
      display: none;
    }
  }

  .item-grid {
    grid-template-columns: 52px auto;
    column-gap: 20px;
    padding: 30px;

    ${media.lg`
        padding: 20px 0;
        grid-template-columns: 48px auto;
    `}
  }

  .item-sn {
    width: 52px;
    height: 54px;
    border-radius: 10px;
    border: 1px solid ${theme.colors.black15};

    ${media.lg`
        width: 46px;
        height: 46px;
        border-radius: 8px;
    `}
  }

  .item-head {
    margin-top: 10px;
    column-gap: 12px;
    cursor: pointer;
  }

  .item-title {
    margin-top: 0;
  }

  .item-text {
    max-height: 0;
    overflow: hidden;
    transition: ${theme.transitions.allEaseInOut};
    &.show {
      max-height: 100%;
    }
  }

  .item-btn{
    width: 28px;
    height: 28px;
    padding: 5px;
    margin-top: -3px;

    ${media.lg`
        width: 24px;
        height: 24px;
    `}
  }
`;
