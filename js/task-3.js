function getElementWidth(content, padding, border) {
  [padding, border, content] = [
    parseInt(padding),
    parseInt(border),
    parseInt(content),
  ];
  return content + 2 * padding + 2 * border;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
