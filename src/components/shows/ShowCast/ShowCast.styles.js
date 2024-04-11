import styled from "styled-components";
import { theme } from "../../../styles/theme/theme";

export const ShowCastWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  .show-cast-item {
    padding: 0 8px;

    .item-content {
      width: 80px;
      min-width: 80px;
      height: 90px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid ${theme.colors.black15};
    }
  }

  .custom-prev-arrow{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    left: 8px;
  }

  .custom-next-arrow{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    right: 8px;
  }
`;
