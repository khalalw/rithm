function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function remove(arr, item) {
  let idx = arr.indexOf(item);

  if (idx >= 0) {
    arr.splice(idx, 1);
    return arr;
  }

  return undefined;
}

export {
  choice,
  remove
};