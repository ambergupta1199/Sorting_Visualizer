
import React from "react";

function AboutPage() {
  // Define information for multiple sorting algorithms
  const algorithms = {
    bubbleSort: {
      name: "Bubble Sort",
      description: "Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list to be sorted, compares adjacent elements, and swaps them if they are in the wrong order.",
      time_complexity: {
        best: ["O(n)", "text-green-500"],
        average: ["O(n²)", "text-yellow-500"],
        worst: ["O(n²)", "text-red-500"],
      },
      space_complexity: ["O(1)", "text-blue-500"],
    },
    quickSort: {
      name: "Quick Sort",
      description: "Quick Sort is a divide-and-conquer algorithm that picks a pivot element and partitions the array around the pivot so that elements smaller than the pivot come before it, and elements greater come after.",
      time_complexity: {
        best: ["O(n log n)", "text-green-500"],
        average: ["O(n log n)", "text-yellow-500"],
        worst: ["O(n²)", "text-red-500"],
      },
      space_complexity: ["O(log n)", "text-blue-500"],
    },
    mergeSort: {
      name: "Merge Sort",
      description: "Merge Sort is a stable, divide-and-conquer sorting algorithm that splits the array in half, sorts each half, and then merges them back together in sorted order.",
      time_complexity: {
        best: ["O(n log n)", "text-green-500"],
        average: ["O(n log n)", "text-yellow-500"],
        worst: ["O(n log n)", "text-red-500"],
      },
      space_complexity: ["O(n)", "text-blue-500"],
    },
    insertionSort: {
      name: "Insertion Sort",
      description: "Insertion Sort builds the sorted list one element at a time, by repeatedly picking the next item and inserting it into its correct position within the already-sorted part of the list.",
      time_complexity: {
        best: ["O(n)", "text-green-500"],
        average: ["O(n²)", "text-yellow-500"],
        worst: ["O(n²)", "text-red-500"],
      },
      space_complexity: ["O(1)", "text-blue-500"],
    },
    selectionSort: {
      name: "Selection Sort",
      description: "Selection Sort repeatedly finds the minimum element from the unsorted part of the array and places it at the beginning.",
      time_complexity: {
        best: ["O(n²)", "text-yellow-500"],
        average: ["O(n²)", "text-yellow-500"],
        worst: ["O(n²)", "text-red-500"],
      },
      space_complexity: ["O(1)", "text-blue-500"],
    },
    heapSort: {
      name: "Heap Sort",
      description: "Heap Sort is a comparison-based sorting technique based on a binary heap data structure. It first builds a max heap and then swaps the root with the last element and reduces the heap size.",
      time_complexity: {
        best: ["O(n log n)", "text-green-500"],
        average: ["O(n log n)", "text-yellow-500"],
        worst: ["O(n log n)", "text-red-500"],
      },
      space_complexity: ["O(1)", "text-blue-500"],
    },
    radixSort: {
      name: "Radix Sort",
      description: "Radix Sort is a non-comparative sorting algorithm that processes integer keys by their individual digits, which are grouped and ordered by place value.",
      time_complexity: {
        best: ["O(nk)", "text-green-500"],
        average: ["O(nk)", "text-yellow-500"],
        worst: ["O(nk)", "text-red-500"],
      },
      space_complexity: ["O(n+k)", "text-blue-500"],
    },
    countingSort: {
      name: "Counting Sort",
      description: "Counting Sort is a non-comparison-based sorting algorithm that counts the number of occurrences of each distinct element in the input, and uses this count to determine the position of each element in the output sorted array.",
      time_complexity: {
        best: ["O(n + k)", "text-green-500"],  // n is the number of elements, k is the range of input
        average: ["O(n + k)", "text-yellow-500"],
        worst: ["O(n + k)", "text-red-500"],
      },
      space_complexity: ["O(k)", "text-blue-500"],  // k is the range of the input
    },
    combSort: {
    name: "Comb Sort",
    description: "Comb Sort is an improved version of Bubble Sort that eliminates inefficiencies by using a larger gap for comparisons, which gradually decreases over time. The algorithm performs comparisons on elements that are farther apart and, as the gap shrinks, it behaves like Bubble Sort, making fewer redundant comparisons and swaps.",
    time_complexity: {
        best: ["O(n log n)", "text-green-500"],  // Best case with fast gap reduction
        average: ["O(n^2)", "text-yellow-500"],  // Average case with multiple passes over the list
        worst: ["O(n^2)", "text-red-500"],  // Worst case (when array is nearly sorted)
    },
    space_complexity: ["O(1)", "text-blue-500"],  // Comb Sort is an in-place algorithm
},
shellSort: {
    name: "Shell Sort",
    description: "Shell Sort is an in-place comparison-based sorting algorithm that generalizes Insertion Sort to allow the exchange of elements that are far apart. The algorithm starts by comparing elements that are far apart and gradually reduces the gap between the elements. This gap reduction helps the array get closer to being sorted more quickly, making Shell Sort more efficient than regular Insertion Sort.",
    time_complexity: {
        best: ["O(n log n)", "text-green-500"],  // Best case (when the array is nearly sorted)
        average: ["O(n^1.5)", "text-yellow-500"],  // Average case depends on the gap sequence used
        worst: ["O(n^2)", "text-red-500"],  // Worst case (when using a poor gap sequence)
    },
    space_complexity: ["O(1)", "text-blue-500"],  // Shell Sort is an in-place algorithm
},

gnomeSort: {
    name: "Gnome Sort",
    description: "Gnome Sort is a simple, comparison-based sorting algorithm that works by iterating through the list and comparing adjacent elements. If the elements are in the wrong order, it swaps them and then moves one step back to ensure the array is sorted. It is similar to insertion sort but moves backward when a swap occurs. While the algorithm is easy to understand and implement, it is inefficient for large datasets and not widely used in practice for real-world applications.",
    time_complexity: {
        best: ["O(n)", "text-green-500"],  // Best case when the array is already sorted or nearly sorted
        average: ["O(n^2)", "text-yellow-500"],  // Average case, since it may need multiple swaps and backtracking
        worst: ["O(n^2)", "text-red-500"],  // Worst case when the array is in reverse order, requiring the most swaps and backtracking
    },
    space_complexity: ["O(1)", "text-blue-500"],  // Space complexity is O(1) because it sorts the array in-place
},

bogoSort: {
    name: "Bogo Sort",
    description: "Bogo Sort is a highly inefficient, non-comparison-based sorting algorithm that works by randomly shuffling the elements of the array until it is sorted. The algorithm checks if the array is sorted, and if not, it shuffles the array again. This process is repeated until the array is sorted. While it is simple to implement and can be amusing in an educational context, Bogo Sort is extremely slow and not suitable for practical use. Its time complexity is unbounded and can take a very long time even for small arrays, making it one of the worst sorting algorithms in existence.",
    time_complexity: {
        best: ["O(n)", "text-green-500"],  // Best case is when the array is already sorted, so no shuffling is required
        average: ["O((n+1)!)", "text-yellow-500"],  // Average case depends on how quickly the array is shuffled into a sorted order (highly variable)
        worst: ["O((n+1)!)", "text-red-500"],  // Worst case is when the algorithm needs to shuffle the array repeatedly for a very long time (factorial time complexity)
    },
    space_complexity: ["O(n)", "text-blue-500"],  // Space complexity is O(n) due to the array of elements being manipulated and shuffled in place
},


  };

  return (
    <div className="about-page container mx-auto mt-12 px-6 bg-black text-purple-100">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-purple-200">
        About Sorting Algorithms
      </h2>
      
      {Object.values(algorithms).map((algorithm, index) => (
        <div key={index} className="bg-gradient-to-r from-purple-900 to-purple-700 p-8 rounded-xl shadow-lg mb-10">
          <h3 className="text-3xl font-bold text-purple-100 mb-4">
            {algorithm.name}
          </h3>
          <p className="text-purple-300 mb-6 text-lg">{algorithm.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-purple-800 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold text-purple-200 mb-3">
                Time Complexity
              </h4>
              <ul className="text-purple-100 space-y-2">
                <li className={algorithm.time_complexity.best[1]}>
                  <span className="font-semibold">Best:</span> {algorithm.time_complexity.best[0]}
                </li>
                <li className={algorithm.time_complexity.average[1]}>
                  <span className="font-semibold">Average:</span> {algorithm.time_complexity.average[0]}
                </li>
                <li className={algorithm.time_complexity.worst[1]}>
                  <span className="font-semibold">Worst:</span> {algorithm.time_complexity.worst[0]}
                </li>
              </ul>
            </div>
            <div className="p-6 bg-purple-800 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold text-purple-200 mb-3">
                Space Complexity
              </h4>
              <p className={`${algorithm.space_complexity[1]} text-lg`}>
                {algorithm.space_complexity[0]}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutPage;
