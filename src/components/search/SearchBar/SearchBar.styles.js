import styled from "styled-components";
import { theme } from "../../../styles/theme/theme";

export const SearchBarWrapper = styled.div`
  .searchbar-top {
    height: 50vh;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;

    .searchbar-banner {
      position: absolute;
    }
  }

  .search-box {
    position: relative;
    column-gap: 16px;
    background-color: ${theme.colors.black15};
    border-radius: 100vh;
    min-width: 600px;
    padding: 16px 24px;
    border: 1px solid ${theme.colors.gray60};

    .search-icon {
      width: 25px;
      height: 25px;
      min-width: 25px;
      opacity: 0.4;
    }

    .search-input {
      flex: 1;
      input {
        width: 100%;
        background-color: transparent;
        border: 0;
        outline: 0;
        padding: 2px;
        font-family: inherit;
        color: ${theme.colors.gray60};
        caret-color: ${theme.colors.gray60};
      }
    }

    .search-error-text{
        position: absolute;
        top: 100%;
        left: 10px;
        padding: 4px;
        display: block;
        font-weight: 600;
    }
  }
`;
