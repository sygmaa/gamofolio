export type Direction = 'up' | 'left' | 'right' | 'down';

export interface CommandsProps {
  onSpaceChange: (isPressed: boolean) => any;
  onArrowUpChange: (isPressed: boolean) => any;
  onArrowDownChange: (isPressed: boolean) => any;
  onArrowLeftChange: (isPressed: boolean) => any;
  onArrowRightChange: (isPressed: boolean) => any;
}

export interface ArrowProps {
  direction: Direction;
}

export interface ArrowContainerProps {
  direction: Direction;
}

export interface MoveParams {
  direction: 'left' | 'right';
  position: number;
}

export interface ArrowProps {
  direction: Direction;
}

export interface ArrowContainerProps {
  direction: Direction;
}

interface BaseProps {
  id?: string;
  'data-testid'?: string;
  className?: string;
}

export interface GameContainerProps extends BaseProps {
  width: number;
  height: number;
  background?: string;
}

export interface PlanProps extends BaseProps {
  left: number;
  zIndex?: number;
}

export interface GameElementProps extends BaseProps {
  width: number;
  height: number;
  left: number;
  bottom?: number;
  top?: number;
  zIndex?: number;
  transition?: string;
}

export interface MoveParams {
  direction: 'left' | 'right';
  position: number;
}

export interface GameEngineProps {
  elementWidth: number;
  maxRightOffset: number;
  isActive: boolean;
  initPosition?: number;
  nbLines: number;
  onJump?: (position: number) => any;
  onTop?: (position: number) => any;
  onResize?: () => any;
  onMove?: (params: MoveParams) => any;
}
