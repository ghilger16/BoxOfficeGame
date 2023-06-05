import React from "react";

import * as Styled from "./PageContainer.styled";

type PageContainerProps = {
  children: React.ReactNode;
};

export const PageContainer: React.FunctionComponent<PageContainerProps> = ({
  children,
  ...rest
}: PageContainerProps) => {
  return (
    <div {...rest}>
      <Styled.Container>{children}</Styled.Container>
    </div>
  );
};
