// Linear Search
function linearSearch(array, value) {
  let index = -1;
  array.forEach((val, idx) => {
    if (val === value) {
      index = idx;
    }
  });
  return index;
}

// Binary Search
function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.ceil((left + right) / 2);

    if (array[middle] === value) {
      return middle;
    } else if (array[middle] < value) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

// Linear search, recursively
function linearSearchRecursive(array, value, index) {
  if (index >= array.length) {
    return -1;
  }

  if (array[index] === value) {
    return index;
  }

  return linearSearchRecursive(array, value, index + 1);
}
