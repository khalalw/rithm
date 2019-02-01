// Bubble Sort
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Selection sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIndex = 0;
    let isNewMinimum = false;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
        isNewMinimum = true;
      }
    }
    if (isNewMinimum) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

// Insertion sort
function insertionSort(arr) {
  // mark first element as sorted
  for (let i = 1; i < arr.length; i++) {
    // extract element for each unsorted element
    let temp = arr[i];
    for (let j = i - 1; j >= 0 && temp < arr[j]; j--, i--) {
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  return arr;
}

// Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let middle = Math.ceil(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left.length ? left : right);
}

// Quick Sort
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // use first number as pivot
  let [pivot, ...rest] = arr;
  let left = [];
  let right = [];

  // compare each value of array and assign to left/right
  rest.forEach(element =>
    element < pivot ? left.push(element) : right.push(element)
  );

  return [...quickSort(left), pivot, ...quickSort(right)];
}
