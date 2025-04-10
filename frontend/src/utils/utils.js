export const stringOuterProduct = (vec1, vec2) =>
  vec1.flatMap((string1) => vec2.map((string2) => `${string1}${string2}`));
