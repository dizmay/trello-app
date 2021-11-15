export const stopClick = (e) => {
  e.stopPropagation();
}

export const stopDrag = (e) => {
  e.preventDefault();
  e.stopPropagation();
}
