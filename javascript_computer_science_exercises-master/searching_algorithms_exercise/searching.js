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

// Binary search, recursively
function binarySearchRecursive(
  array,
  value,
  left = 0,
  right = array.length - 1
) {
  if (right >= left) {
    let middle = Math.floor((left + right) / 2);

    if (array[middle] === value) {
      return middle;
    } else if (array[middle] > value) {
      return binarySearchRecursive(array, value, left, middle - 1);
    } else {
      return binarySearchRecursive(array, value, middle + 1, right);
    }
  } else {
    return -1;
  }
}
