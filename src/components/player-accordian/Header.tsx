import React from "react";
import { IHeaderProps } from "./types";
import { usePlayerAccordianContext } from "./context";

import * as Styled from "./Header.styled";

export const Header: React.FC<IHeaderProps> = ({
  actionButton,
  onSavePriority,
  onCancelPriority,
}) => {
  const titleColumn = usePlayerAccordianContext((c) => c[0].titleColumn);
  const valueColumn = usePlayerAccordianContext((c) => c[0].valueColumn ?? []);
  const showUpdatePriorityState = usePlayerAccordianContext(
    (c) => c[0].showUpdatePriorityState
  );
  const utilityButtons = usePlayerAccordianContext((c) => c[0].headerUtility);

  const setState = usePlayerAccordianContext((c) => c[1]);

  const handleAction = React.useCallback(() => {
    setState((prev: any) => ({
      ...prev,
      hasActionButtonClicked: true,
    }));
  }, [setState]);

  return titleColumn?.text ? (
    <Styled.Heading data-testid="player-accordian-group-header">
      <Styled.TitleCol>
        <Styled.Title
          data-testid="player-accordian-group-title"
          type={titleColumn?.headerType}
        >
          {titleColumn?.text}
        </Styled.Title>
        <Styled.TitleButtons></Styled.TitleButtons>
      </Styled.TitleCol>
    </Styled.Heading>
  ) : null;
};
