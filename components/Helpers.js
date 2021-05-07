export function makeElement(element, { text, style } = {}) {
  const e = document.createElement(element);

  if (text !== undefined)
    e.textContent = text;

  if (style !== undefined)
    e.classList.add(style);

  return e;
}
