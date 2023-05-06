import React, { useContext } from "react";

const DEFAULT_VALUES = {
  keys: [],
  openDrawers: 0,
  isOpenAll: false,
  isCloseAll: false,
  showUpdatePriorityState: false,
  onSavePriority: () => {},
};

export const PlayerAccordianContext = React.createContext({
  state: DEFAULT_VALUES,
  setState: (value: any) => {},
});

const PlayerAccordianProvider: React.FC<{
  initialValues?: any;
  children?: any;
}> = ({ initialValues = {}, children }) => {
  const [state, setState] = React.useState({
    ...DEFAULT_VALUES,
    ...initialValues,
  });

  React.useEffect(() => {
    if (initialValues) {
      const { isDraggable, headerUtility, keys } = initialValues;
      setState((prev: any) => ({
        ...prev,
        isDraggable: isDraggable,
        headerUtility,
        keys,
      }));
    }
  }, [initialValues]);

  const contextValue = React.useMemo(() => {
    return { state, setState };
  }, [state, setState]);

  return (
    <PlayerAccordianContext.Provider value={contextValue}>
      {children}
    </PlayerAccordianContext.Provider>
  );
};

export const usePlayerAccordianContext = <Slice = any,>(
  selector: (context: any) => Slice
): Slice => {
  const context = useContext(PlayerAccordianContext);
  if (!context) {
    throw new Error(
      "usePlayerAccordianContext must be used within a PlayerAccordianProvider"
    );
  }
  return selector(context);
};
