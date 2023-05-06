import React from "react";
import { PlayerAccordianProvider } from "./context";
export const PlayerAccordian: React.FC<any> = ({
  keys,
  titleColumn,
  valueColumns = [],
  hasToggle,
  actionButton,
  children,
  onSavePriority,
  onCancelPriority,
  isDraggable,
  headerUtility,
  ...rest
}) => {
  const initialValues = React.useMemo(
    () => ({
      keys,
      isOpenAll: false,
      isCloseAll: true,
      titleColumn,
      valueColumns,
      hasToggle,
      hasActionButtonClicked: false,
      isDraggable,
      headerUtility,
    }),
    [keys, titleColumn, valueColumns, hasToggle, isDraggable, headerUtility]
  );
  return (
    <PlayerAccordianProvider initialValues={initialValues}>
      <section data-testid="player-accordian" {...rest}>
        <Header
          actionButton={actionButton}
          onSavePriority={onSavePriority}
          onCancelPriority={onCancelPriority}
        />
        <ItemList>{children}</ItemList>
      </section>
    </PlayerAccordianProvider>
  );
};
