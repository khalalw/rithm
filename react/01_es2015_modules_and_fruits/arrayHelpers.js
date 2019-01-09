export function choice(arr) {
  return arr[Math.floor(Math.random * arr.length)];
}

export function remove(arr, item) {
  let array = arr.slice();
  let idx = array.indexOf(item);

  return idx < 0 ? undefined : array.splice(idx, 1);
}