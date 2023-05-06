export interface IPlayerAccordianContextValues {
  keys: string[];
  openDrawers?: number;
  titleColumn?: any;
  valueColumns?: any[];
  hasActionButtonClicked?: boolean;
  isOpenAll?: boolean;
  isCloseAll?: boolean;
  showUpdatePriorityState?: boolean;
  onSavePriority?: () => void;
  onCancelPriority?: () => void;
  isDraggable?: boolean;
  headerUtility?: React.ReactNode;
}

export interface IHeaderProps {
  actionButton?: React.ReactNode;
  onSavePriority?: () => void;
  onCancelPriority?: () => void;
}
