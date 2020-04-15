import styled from "styled-components";

export interface MountainProps {
  angle: number;
  percent: number;
  moutainWidth: number;
  mountainHeight: number;
  background: string;
}

export const Mountains = styled.div<MountainProps>`
  width: 100%;
  height: 100%;
  transition: all 2s ease;
  background: ${({
    angle,
    percent,
    moutainWidth,
    mountainHeight,
    background: color,
  }) => {
    const w = moutainWidth ? `${moutainWidth}%` : 0;
    const h = mountainHeight ? `${mountainHeight}%` : 0;
    const pMore = percent + 0.2;

    return `
      linear-gradient(-${angle}deg, ${color}00 ${percent}%, ${color} ${pMore}%) ${w} 0 / ${h} 100% repeat-x,
      linear-gradient(${angle}deg, ${color}00 ${percent}%, ${color} ${pMore}%) ${w} 0 / ${h} 100% repeat-x,
      linear-gradient(-${angle}deg, ${color}00 ${percent}%, ${color} ${pMore}%) ${w} 0 / ${h} 100% repeat-x,
      linear-gradient(${angle}deg, ${color}00 ${percent}%, ${color} ${pMore}%) ${w} 0 / ${h} 100% repeat-x
    `;
  }};
`;
