function getElementWidth(content, padding, border) {
  let contentValue = parseFloat(content);
  let paddingValue = parseFloat(padding);
  let borderValue = parseFloat(border);

  return contentValue + 2 * paddingValue + 2 * borderValue;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
