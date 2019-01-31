// Linear Search
function linearSearch(arr, value) {
  let idx = -1;
  arr.forEach((val, index) => {
    if (val === value) {
      idx = index;
    }
  });
  return idx;
}
