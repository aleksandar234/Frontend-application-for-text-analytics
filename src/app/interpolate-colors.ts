/**
 * Interpolate two colors
 *
 * @param color1 - The starting color
 * @param color2 - The end color
 * @return The interpolated color
 */
export function interpolateColor(color1: number[], color2: number[], factor = .5, easing?: Function): number[] {
  const result: number[] = [];
  const factorInc = easing ? easing(factor) : factor;

  for (let i = 0; i < color1.length; i++) {
    result.push(Math.round(color1[i] + factorInc * (color2[i] - color1[i])));
  }

  return result;
}
