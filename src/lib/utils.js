export function betweenValue(number, min, max) {
  let n = number;
  if (n < min) {
    n = min;
  } else if (n > max) {
    n = max;
  }
  return n;
}

export function arrayRange(start, end) {
  const items = [];
  for (let i = start; i <= end; i++) {
    items.push(i);
  }
  return items;
}
