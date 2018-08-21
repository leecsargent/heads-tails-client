export function contain(width, marginTop, marginSide, padding) {
  return `
    width: ${width};
    margin: ${marginTop} ${marginSide} ;
    padding: ${padding};
    box-sizing: border-box;
  `;
}
