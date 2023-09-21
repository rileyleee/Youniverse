import { css } from "styled-components";

/** 기본 flex */
export const FlexBase = css`
  display: flex;
`;

/** flex + 가운데정렬 (가로) */
export const AlignCenter = css`
  ${FlexBase}
  align-items: center;
`;

/** 기본 flex + 정가운데 정렬 */
export const FlexCenter = css`
  ${FlexBase}
  flex-direction: column; /**  */
  align-items: center;
  justify-content: center;
`;

/** flex + 가로, 가운데, 양쪽 정렬 */
export const FlexRowBetween = css`
  ${FlexBase}
  justify-content: space-between;
  align-items: center;
`;

/** flex + 세로, 가운데, 양쪽 정렬 */
export const FlexColBetween = css`
  ${FlexBase}
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

/** flex + 세로, 왼쪽 정렬 */
export const FlexColBetweenLeft = css`
  ${FlexBase}
  flex-direction: column;
  justify-content: space-between;
`;

/** flex + 세로, 가운데, 균등 정렬 */
export const FlexColAround = css`
  ${FlexBase}
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const FlexAlignBottom = css`
  align-self: end;
`;
