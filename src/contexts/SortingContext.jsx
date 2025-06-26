import React, { createContext, useState } from "react";
import { getRandomNumber, getDigit, mostDigits } from "../helpers/math";
import { awaitTimeout } from "../helpers/promises";

export const SortingContext = createContext();

const speedMap = {
  slow: 1000,
  normal: 600,
  fast: 450,
};

function SortingProvider({ children }) {
  const [sortingState, setSortingState] = useState({
    array: [],
    delay: speedMap["slow"],
    algorithm: "bubble_sort",
    sorted: false,
    sorting: false,
  });

  // Function to update a specific bar's state or value
  const changeBar = (index, payload) => {
    setSortingState((prev) => ({
      ...prev,
      array: prev.array.map((item, i) =>
        i === index ? { ...item, ...payload } : item
      ),
    }));
  };

  // Function to generate a new random array
  const generateSortingArray = () => {
    const generatedArray = Array.from({ length: 12 }, () => ({
      value: getRandomNumber(60, 1000),
      state: "idle",
    }));

    setSortingState((prev) => ({
      ...prev,
      array: generatedArray,
      sorted: false,
      sorting: false,
    }));
  };

  // Function to set a user-provided array
  const setArray = (newArray) => {
    setSortingState((prev) => ({
      ...prev,
      array: newArray,
      sorted: false,
      sorting: false,
    }));
  };

  // Bubble Sort Implementation
  const bubbleSort = async () => {
    const arr = sortingState.array.map((item) => item.value);
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Highlight the bars being compared
        changeBar(j, { state: "selected" });
        changeBar(j + 1, { state: "selected" });

        await awaitTimeout(sortingState.delay);

        if (arr[j] > arr[j + 1]) {
          // Swap the values in the array
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          // Update the values in the state
          changeBar(j, { value: arr[j] });
          changeBar(j + 1, { value: arr[j + 1] });
        }

        // Reset the state to idle
        changeBar(j, { state: "idle" });
        changeBar(j + 1, { state: "idle" });
      }
    }
  };

  // Insertion Sort Implementation
  const insertionSort = async () => {
    const arr = sortingState.array.map((item) => item.value);
    const n = arr.length;

    for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;

      // Highlight the current bar
      changeBar(i, { state: "selected" });
      await awaitTimeout(sortingState.delay);

      // Iterate backwards and shift the elements
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        // Highlight the bar being shifted
        changeBar(j + 1, { value: arr[j + 1], state: "selected" });
        j--;
        await awaitTimeout(sortingState.delay);
      }

      // Place the current element in the correct position
      arr[j + 1] = current;
      changeBar(j + 1, { value: current, state: "idle" });

      // Reset all other bars after placing the element
      for (let k = 0; k <= i; k++) {
        changeBar(k, { state: "idle" });
      }
    }
  };

  // Selection Sort Implementation
  const selectionSort = async () => {
    const arr = sortingState.array.map((item) => item.value);
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      let min = i;
      // Highlight the current minimum
      changeBar(min, { state: "selected" });
      await awaitTimeout(sortingState.delay);

      for (let j = i + 1; j < n; j++) {
        // Highlight the bar being compared
        changeBar(j, { state: "selected" });
        await awaitTimeout(sortingState.delay);

        if (arr[j] < arr[min]) {
          // Reset previous minimum
          changeBar(min, { state: "idle" });
          min = j;
          // Highlight the new minimum
          changeBar(min, { state: "selected" });
        } else {
          // Reset the state if not the new minimum
          changeBar(j, { state: "idle" });
        }
      }

      if (min !== i) {
        // Swap the found minimum with the first element
        [arr[i], arr[min]] = [arr[min], arr[i]];
        changeBar(i, { value: arr[i], state: "idle" });
        changeBar(min, { value: arr[min], state: "idle" });
      } else {
        // If min is already the position, reset the state
        changeBar(i, { state: "idle" });
        changeBar(min, { state: "idle" });
      }
    }
  };

  // Merge Sort Implementation
  const mergeSort = async () => {
    const arr = sortingState.array.map((item) => item.value);
    await mergeSortHelper(arr, 0, arr.length - 1);
  };

  async function mergeSortHelper(arr, start, end) {
    if (start >= end) return;

    const middle = Math.floor((start + end) / 2);
    await mergeSortHelper(arr, start, middle);
    await mergeSortHelper(arr, middle + 1, end);
    await mergeSortMerger(arr, start, middle, end);
  }

  async function mergeSortMerger(arr, start, middle, end) {
    let left = arr.slice(start, middle + 1);
    let right = arr.slice(middle + 1, end + 1);
    let i = 0,
      j = 0,
      k = start;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        arr[k] = left[i];
        changeBar(k, { value: arr[k], state: "selected" });
        i++;
      } else {
        arr[k] = right[j];
        changeBar(k, { value: arr[k], state: "selected" });
        j++;
      }
      await awaitTimeout(sortingState.delay);
      changeBar(k, { state: "idle" });
      k++;
    }

    while (i < left.length) {
      arr[k] = left[i];
      changeBar(k, { value: arr[k], state: "selected" });
      await awaitTimeout(sortingState.delay);
      changeBar(k, { state: "idle" });
      i++;
      k++;
    }

    while (j < right.length) {
      arr[k] = right[j];
      changeBar(k, { value: arr[k], state: "selected" });
      await awaitTimeout(sortingState.delay);
      changeBar(k, { state: "idle" });
      j++;
      k++;
    }
  }

  // Quick Sort Implementation
  const quickSort = async () => {
    const arr = sortingState.array.map((item) => item.value);
    await quickSortHelper(arr, 0, arr.length - 1);
  };

  async function quickSortHelper(arr, start, end) {
    if (start >= end) return;

    const pivotIndex = await partition(arr, start, end);
    await quickSortHelper(arr, start, pivotIndex - 1);
    await quickSortHelper(arr, pivotIndex + 1, end);
  }

  async function partition(arr, start, end) {
    const pivot = arr[end];
    let i = start;

    for (let j = start; j < end; j++) {
      changeBar(j, { state: "selected" });
      await awaitTimeout(sortingState.delay);
      if (arr[j] < pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        changeBar(i, { value: arr[i], state: "selected" });
        changeBar(j, { value: arr[j], state: "selected" });
        await awaitTimeout(sortingState.delay);
        changeBar(i, { state: "idle" });
        changeBar(j, { state: "idle" });
        i++;
      }
      changeBar(j, { state: "idle" });
    }

    [arr[i], arr[end]] = [arr[end], arr[i]];
    changeBar(i, { value: arr[i], state: "selected" });
    changeBar(end, { value: arr[end], state: "selected" });
    await awaitTimeout(sortingState.delay);
    changeBar(i, { state: "idle" });
    changeBar(end, { state: "idle" });
    return i;
  }

  // Radix Sort Implementation
  const radixSort = async () => {
    let arr = sortingState.array.map((item) => item.value);
    let maxDigitCount = mostDigits(arr);

    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < arr.length; i++) {
        let digit = getDigit(arr[i], k);
        console.log(digit);
        
        digitBuckets[digit].push(arr[i]);
      }

      arr = [].concat(...digitBuckets);

      for (let i = 0; i < arr.length; i++) {
        changeBar(i, { value: arr[i], state: "selected" });
        await awaitTimeout(sortingState.delay);
        changeBar(i, { state: "idle" });
      }
    }
  };
  // Function to heapify a subtree rooted with node i which is an index in arr[]
  const heapify = async (arr, n, i) => {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // left = 2*i + 1
    const right = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (left < n) {
      changeBar(left, { state: "selected" });
      await awaitTimeout(sortingState.delay);

      if (arr[left] > arr[largest]) {
        largest = left;
      }
      changeBar(left, { state: "idle" });
    }

    // If right child is larger than largest so far
    if (right < n) {
      changeBar(right, { state: "selected" });
      await awaitTimeout(sortingState.delay);

      if (arr[right] > arr[largest]) {
        largest = right;
      }
      changeBar(right, { state: "idle" });
    }

    // If largest is not root
    if (largest !== i) {
      changeBar(i, { state: "selected" });
      changeBar(largest, { state: "selected" });
      await awaitTimeout(sortingState.delay);

      // Swap
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;

      // Update bars
      changeBar(i, { value: arr[i] });
      changeBar(largest, { value: arr[largest] });
      await awaitTimeout(sortingState.delay);

      // Recursively heapify the affected subtree
      await heapify(arr, n, largest);

      // Reset the selected state
      changeBar(i, { state: "idle" });
      changeBar(largest, { state: "idle" });
    }
  };

  const heapSort = async () => {
    console.log("i am here");

    const arr = sortingState.array.map((item) => item.value);
    const n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arr, n, i);
    }

    // One by one extract elements from heap
    for (let i = n - 1; i > 0; i--) {
      // Move current root to end
      changeBar(0, { state: "selected" });
      changeBar(i, { state: "selected" });
      await awaitTimeout(sortingState.delay);

      // Swap
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      // Update bars
      changeBar(0, { value: arr[0] });
      changeBar(i, { value: arr[i] });
      await awaitTimeout(sortingState.delay);

      // Call max heap on the reduced heap
      await heapify(arr, i, 0);

      // Reset the selected state
      changeBar(0, { state: "idle" });
      changeBar(i, { state: "idle" });
    }
  };

  const countingSort = async () => {
    const arr = sortingState.array.map((item) => item.value);
    const maxVal = Math.max(...arr);
    const count = new Array(maxVal + 1).fill(0);
    const output = new Array(arr.length);

    // Count occurrences
    for (let i = 0; i < arr.length; i++) {
      count[arr[i]]++;
      changeBar(i, { state: "selected" });
      await awaitTimeout(sortingState.delay);
      changeBar(i, { state: "idle" });
    }

    // Update the count array to hold the cumulative count
    for (let i = 1; i <= maxVal; i++) {
      count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
      const value = arr[i];
      output[count[value] - 1] = value;
      changeBar(i, { state: "selected" });
      changeBar(count[value] - 1, { state: "selected" });
      await awaitTimeout(sortingState.delay);

      // Update the output array
      changeBar(count[value] - 1, { value: output[count[value] - 1] });
      await awaitTimeout(sortingState.delay);

      count[value]--;
      changeBar(i, { state: "idle" });
      changeBar(count[value], { state: "idle" });
    }

    // Copy the sorted elements back to the original array
    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
      changeBar(i, { value: arr[i] });
      await awaitTimeout(sortingState.delay);
    }
  };

  const combSort = async () => {
    const arr = sortingState.array.map((item) => item.value);
    const n = arr.length;
    let gap = n;
    let swapped = true;
    const shrink = 1.3; // shrink factor
    const threshold = 1; // minimum gap size

    while (gap > threshold || swapped) {
      // Update the gap
      gap = Math.floor(gap / shrink);
      if (gap < threshold) gap = threshold; // Ensure gap doesn't go below the threshold

      swapped = false;

      for (let i = 0; i + gap < n; i++) {
        // Highlight the bars being compared
        changeBar(i, { state: "selected" });
        changeBar(i + gap, { state: "selected" });

        await awaitTimeout(sortingState.delay);

        if (arr[i] > arr[i + gap]) {
          // Swap the values in the array
          [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
          // Update the values in the state
          changeBar(i, { value: arr[i] });
          changeBar(i + gap, { value: arr[i + gap] });

          swapped = true;
        }

        // Reset the state to idle
        changeBar(i, { state: "idle" });
        changeBar(i + gap, { state: "idle" });
      }
    }
  };

  // const shellSort = async () => {
  //   const arr = sortingState.array.map((item) => item.value);
  //   const n = arr.length;

  //   // Start with a large gap and reduce the gap in each pass
  //   let gap = Math.floor(n / 2);

  //   while (gap > 0) {
  //     for (let i = gap; i < n; i++) {
  //       const temp = arr[i];
  //       let j = i;

  //       // Highlight the elements being compared
  //       changeBar(i, { state: "selected" });
  //       changeBar(i - gap, { state: "selected" });

  //       await awaitTimeout(sortingState.delay);

  //       // Perform a gapped insertion sort
  //       while (j >= gap && arr[j - gap] > temp) {
  //         arr[j] = arr[j - gap];
  //         j -= gap;

  //         // Update the bar values as we shift elements
  //         changeBar(j, { value: arr[j] });
  //         changeBar(j - gap, { value: arr[j - gap] });

  //         // Pause to simulate sorting steps
  //         await awaitTimeout(sortingState.delay);
  //       }

  //       // Place the element at its correct position
  //       arr[j] = temp;
  //       changeBar(j, { value: arr[j] });

  //       // Reset the state of the bars to idle
  //       changeBar(i, { state: "idle" });
  //       changeBar(i - gap, { state: "idle" });
  //     }

  //     // Reduce the gap
  //     gap = Math.floor(gap / 2);
  //   }
  // };
  const shellSort = async () => {
    const arr = sortingState.array.map((item) => item.value);
    const n = arr.length;

    // Start with a large gap and reduce the gap in each pass
    let gap = Math.floor(n / 2);

    while (gap > 0) {
      for (let i = gap; i < n; i++) {
        const temp = arr[i];
        let j = i;

        // Highlight the elements being compared
        changeBar(i, { state: "selected" });
        changeBar(i - gap, { state: "selected" });

        await awaitTimeout(sortingState.delay);

        // Perform a gapped insertion sort
        while (j >= gap && arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          j -= gap;

          // Update the bar values as we shift elements
          changeBar(j, { value: arr[j] });
          changeBar(j - gap, { value: arr[j - gap] });

          // Pause to simulate sorting steps
          await awaitTimeout(sortingState.delay);
        }

        // Place the element at its correct position
        arr[j] = temp;
        changeBar(j, { value: arr[j] });

        // Reset the state of the bars to idle
        changeBar(i, { state: "idle" });
        changeBar(i - gap, { state: "idle" });
      }

      // Reduce the gap
      gap = Math.floor(gap / 2);
    }

    // Final array visualization after sorting is complete
    for (let i = 0; i < n; i++) {
      changeBar(i, { state: "sorted", value: arr[i] });
    }
  };

  
  const gnomeSort = async () => {
    const arr = sortingState.array.map((item) => item.value);
    let index = 0;
    const n = arr.length;

    // Start sorting
    while (index < n - 1) {
      // Ensure we're not going out of bounds
      // Highlight the bars being compared
      changeBar(index, { state: "selected" });
      changeBar(index + 1, { state: "selected" });

      await awaitTimeout(sortingState.delay);

      if (arr[index] <= arr[index + 1]) {
        // If the pair is in order, move to the next element
        changeBar(index, { state: "idle" });
        changeBar(index + 1, { state: "idle" });
        index++;
      } else {
        // If the pair is out of order, swap them
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];

        // Show the updated bars after the swap
        changeBar(index, { value: arr[index], state: "selected" });
        changeBar(index + 1, { value: arr[index + 1], state: "selected" });

        await awaitTimeout(sortingState.delay);

        changeBar(index, { state: "idle" });
        changeBar(index + 1, { state: "idle" });
        // Move one step back if swap happened, but don't go past the start
        if (index > 0) {
          index--;
        } else {
          // Only move forward if we're at the start of the array
          index++;
        }

        // Reset the selected state after processing
      }
    }

    // Ensure the last bar is reset to idle after sorting is complete
    changeBar(index, { state: "idle" });

    // Mark as sorted when done
    setSortingState((prev) => ({
      ...prev,
      sorted: true,
      sorting: false,
    }));
  };
  const bogoSort = async () => {
    const arr = sortingState.array.map((item) => item.value);
    const n = arr.length;
  
    // Helper function to check if the array is sorted
    const isSorted = (array) => {
      for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          return false;
        }
      }
      return true;
    };
  
    // Helper function to shuffle the array randomly
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
    };
  
    let sorted = false;
    while (!sorted) {
      // Shuffle the array randomly
      shuffleArray(arr);
  
      // Highlight the array elements being shuffled
      for (let i = 0; i < n; i++) {
        changeBar(i, { state: "selected", value: arr[i] });
      }
  
      await awaitTimeout(sortingState.delay);
  
      // Check if the array is sorted
      sorted = isSorted(arr);
  
      // Reset the state of the bars after each shuffle attempt
      for (let i = 0; i < n; i++) {
        changeBar(i, { state: "idle", value: arr[i] });
      }
    }
  
    // Final array visualization after sorting is complete
    for (let i = 0; i < n; i++) {
      changeBar(i, { state: "sorted", value: arr[i] });
    }
  
    // Mark as sorted when done
    setSortingState((prev) => ({
      ...prev,
      sorted: true,
      sorting: false,
    }));
  };
  
  // Map algorithm names to their corresponding functions
  const algorithmMap = {
    bubble_sort: bubbleSort,
    insertion_sort: insertionSort,
    selection_sort: selectionSort,
    merge_sort: mergeSort,
    quick_sort: quickSort,
    radix_sort: radixSort,
    heap_sort: heapSort,
    counting_sort: countingSort,
    comb_sort: combSort,
    shell_sort: shellSort,
    gnome_sort: gnomeSort,
    bogo_sort: bogoSort
  };

  // Function to start the visualization
  const startVisualizing = async () => {
    setSortingState((prev) => ({
      ...prev,
      sorting: true,
    }));

    await algorithmMap[sortingState.algorithm]();

    setSortingState((prev) => ({
      ...prev,
      sorted: true,
      sorting: false,
    }));
  };

  // Function to change sorting speed
  const changeSortingSpeed = (e) => {
    setSortingState((prev) => ({
      ...prev,
      delay: speedMap[e.target.value] || 500,
    }));
  };

  // Function to change the selected algorithm
  const changeAlgorithm = (algorithm) => {
    setSortingState((prev) => ({
      ...prev,
      algorithm,
    }));
  };

  return (
    <SortingContext.Provider
      value={{
        sortingState,
        generateSortingArray,
        setArray,
        startVisualizing,
        changeSortingSpeed,
        changeAlgorithm,
      }}
    >
      {children}
    </SortingContext.Provider>
  );
}

export default SortingProvider;
