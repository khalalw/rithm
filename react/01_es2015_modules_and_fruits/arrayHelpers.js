export function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function remove(arr, item) {
  let array = arr.slice();
  let idx = array.indexOf(item);

  if (idx >= 0) {
    array.splice(idx, 1);
    return array;
  }

  return undefined;
}