import styled from "styled-components";
import { mediaQuery } from "../../helpers/media-query";
import { pageContentWidths } from "../../helpers/page-content-widths";

export const Container = styled.div`
  margin: 0 auto;

  ${mediaQuery.min.s} {
    width: ${pageContentWidths.s};
  }

  ${mediaQuery.min.m} {
    width: ${pageContentWidths.m};
  }

  ${mediaQuery.min.l} {
    width: ${pageContentWidths.l};
  }
`;
