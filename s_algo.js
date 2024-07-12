function insertionSort(arr) {
  // Traverse from the second element to the end of the array
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // The element to be inserted into the sorted portion of the array
    let j = i - 1; // The last index of the sorted portion

    // Shift elements of the sorted portion that are greater than the key to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // Move the element one position to the right
      j--; // Move to the next element
    }

    // Insert the key into its correct position
    arr[j + 1] = key;
  }

  return arr; // Return the sorted array
}

// Example usage:
const unsortedArray = [12, 11, 13, 5, 6];
console.log("Sorted array:", insertionSort(unsortedArray));