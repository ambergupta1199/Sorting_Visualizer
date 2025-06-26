const algorithmInfos = {
	bubble_sort: {
		name: "Bubble Sort",
		time_complexity: {
			best: ['O(n)', 'yellow-600'],
			average: ['O(n^2)', 'red-800'],
			worst: ['O(n^2)', 'red-800']
		},
		space_complexity: ['O(1)', 'green-800'],
		description: `
			Bubble sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements in an array that are in the wrong order. This process is repeated until the entire array is sorted.
		
			The algorithm starts at the beginning of the array and moves through it, swapping adjacent elements that are out of order. This process is repeated until the end of the array is reached, at which point the algorithm starts again from the beginning. The algorithm continues to iterate through the array and swap adjacent elements until no more swaps are needed.

			Although bubble sort has a time complexity of O(n^2), which makes it less efficient than other sorting algorithms, it can be useful for small arrays or as a simple illustration of how sorting algorithms work.
		`
	},
	insertion_sort: {
		name: "Insertion Sort",
		time_complexity: {
			best: ['O(n)', 'yellow-600'],
			average: ['O(n^2)', 'red-800'],
			worst: ['O(n^2)', 'red-800']
		},
		space_complexity: ['O(1)', 'green-800'],
		description: `
			Insertion sort is a simple sorting algorithm that works by repeatedly inserting elements from an unsorted array into a sorted sub-array at the correct position.

			The algorithm starts by considering the first element of the array as a sorted sub-array. It then picks the next element and compares it to the elements in the sorted sub-array, moving elements to the right until it finds the correct position to insert the new element. This process is repeated for each subsequent element until the entire array is sorted.

			Insertion sort is a stable sorting algorithm, meaning it preserves the relative order of equal elements in the input array. It is also an in-place algorithm, meaning it requires no additional memory space beyond the original array. However, insertion sort has a time complexity of O(n^2) in the worst case, where n is the number of elements in the array. Therefore, it is not recommended for large data sets, but it can be efficient for small or nearly sorted arrays.
		`
	},
	selection_sort: {
		name: "Selection Sort",
		time_complexity: {
			best: ['O(n^2)', 'red-800'],
			average: ['O(n^2)', 'red-800'],
			worst: ['O(n^2)', 'red-800'],
		},
		space_complexity: ['O(1)', 'green-800'],
		description: `
			Selection sort is a sorting algorithm that sorts an array by repeatedly finding the minimum element from the unsorted part of the array and moving it to the beginning of the array. 
		
			The algorithm starts by finding the minimum element from the entire array and swapping it with the first element. It then finds the minimum element from the remaining unsorted part of the array and swaps it with the second element, and so on until the entire array is sorted.

			Although selection sort has a time complexity of O(n^2), it can be useful for small arrays or teaching as it is relatively simple.
		`
	},
	merge_sort: {
		name: "Merge Sort",
		time_complexity: {
			best: ['O(n log(n))', 'orange-700'],
			average: ['O(n log(n))', 'orange-700'],
			worst: ['O(n log(n))', 'orange-700'],
		},
		space_complexity: ["O(n)", "yellow-600"],
		description: `
			Merge sort is a popular sorting algorithm that follows the divide-and-conquer approach. It works by breaking down an unsorted array into smaller, sorted subarrays and then merging those subarrays to produce a fully sorted array.

			The algorithm first divides the unsorted array into two halves, then recursively divides each half into two smaller halves until each subarray contains only one element. Then, the algorithm merges the subarrays back together, comparing the first elements of each subarray and placing them in order. This process continues until the entire array is sorted.

			While merge sort is an efficient and reliable sorting algorithm, it may not be as commonly used as some other sorting algorithms. This is likely due to its additional space requirements and performance drawbacks compared to other sorting algorithms. 
		`
	},
	quick_sort: {
		name: "Quick Sort",
		time_complexity: {
			best: ['O(n log(n))', 'orange-700'],
			average: ['O(n log(n))', 'orange-700'],
			worst: ['O(n^2)', 'red-800']
		},
		space_complexity: ['O(log (n))', 'lime-700'],
		description: `
			Quick sort is a popular sorting algorithm that uses a divide-and-conquer approach to sort an array of elements.
		
			The basic idea behind quick sort is to partition the array into two smaller sub-arrays based on a chosen pivot element. Elements smaller than the pivot are moved to the left sub-array, and elements greater than the pivot are moved to the right sub-array. This process is repeated recursively on each sub-array until the sub-arrays are small enough to be sorted easily. Once the sub-arrays are sorted, they are combined to form the final sorted array.
		
			Quick sort is known for its efficiency and is often used in practice such as in the V8 JavaScript engine. However, it can have poor performance if the pivot element is poorly chosen or if the input data is already sorted or nearly sorted.
		`
	},
	radix_sort: {
		name: "Radix Sort",
		time_complexity: {
			best: ['O(nk)', 'green-800'],
			average: ['O(nk)', 'green-800'],
			worst: ['O(nk)', 'green-800']
		},
		space_complexity: ['O(n+k)', 'yellow-600'],
		description: `
			Radix Sort is a non-comparative sorting algorithm that sorts elements based on their digits or characters. It works by iterating through each digit or character of the elements and sorting them based on their values at that position. The sorting process is repeated for each digit or character until all elements are sorted.

			Radix Sort can be performed using either the Least Significant Digit (LSD) or Most Significant Digit (MSD) approach. LSD Radix Sort starts by sorting the elements based on their least significant digit, and then moves on to the next digit until all digits have been sorted. MSD Radix Sort, on the other hand, starts by sorting the elements based on their most significant digit, and then moves on to the next digit until all digits have been sorted.

			One of the advantages of Radix Sort is that it has a time complexity of O(nk), where n is the number of elements and k is the number of digits or characters in the elements. This makes it an efficient algorithm for sorting large data sets, especially when the number of digits or characters is small. However, Radix Sort may not be as efficient as some other sorting algorithms for smaller data sets, and it requires additional memory space to store the intermediate results during sorting.
		`
	},

	heap_sort: {
		name: "Heap Sort",
		time_complexity: {
			best: ['O(nk)', 'green-800'],
			average: ['O(nk)', 'green-800'],
			worst: ['O(nk)', 'green-800']
		},
		space_complexity: ['O(n+k)', 'yellow-600'],
		description: `
			Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure to efficiently sort an array.

      The basic idea of heap sort is to first build a binary heap from the input data. A binary heap is a complete binary tree where each parent node is greater than or equal to its child nodes (max-heap) or less than or equal to its child nodes (min-heap). The largest element is then extracted from the heap and placed in its correct sorted position, and the heap is restructured. This process continues until all elements are sorted.

      Heap sort is notable for its efficient worst-case time complexity of \(O(n \log n)\) and for being an in-place algorithm (i.e., it doesn't require additional memory). However, its performance can be slower than other \(O(n \log n)\) algorithms like quicksort due to its larger constant factors.
		`
	},
	counting_sort: {
		name: "Counting Sort",
		time_complexity: {
			best: ['O(nk)', 'green-800'],
			average: ['O(nk)', 'green-800'],
			worst: ['O(nk)', 'green-800']
		},
		space_complexity: ['O(n+k)', 'yellow-600'],
		description: `
			Counting sort is a non-comparison-based sorting algorithm that counts the number of occurrences of each distinct element in the input, and then uses this count to determine the position of each element in the output array.

      The algorithm works by creating an auxiliary array (the "count array") where each index corresponds to a possible value from the input array. The count array is populated with the frequency of each value. Then, the input elements are placed into the output array based on the count array. This process ensures that the elements are sorted in linear time relative to the number of elements and the range of input values.

      Counting sort is highly efficient for sorting integers or other data types with a limited range of values. However, it is not suitable for sorting arbitrary data or data with large ranges, as the time complexity depends on the range of the input values.
		`
	},
	comb_sort: {
    name: "Comb Sort",
    time_complexity: {
        best: ['O(n log n)', 'green-800'],
        average: ['O(n^2)', 'red-500'],
        worst: ['O(n^2)', 'red-500']
    },
    space_complexity: ['O(1)', 'yellow-600'],
    description: `
        Comb Sort is an improved version of Bubble Sort that eliminates the inefficiencies of the latter by using a larger gap for comparisons, which gradually decreases over time. The algorithm starts by comparing elements that are farther apart, making larger jumps. As the gap decreases, the algorithm performs comparisons over smaller sections of the list, similar to Bubble Sort but with fewer redundant comparisons.

        The key idea of Comb Sort is the "gap sequence", which is based on reducing the gap between the elements to be compared. The gap starts large (usually the size of the list) and reduces by a factor of around 1.3 (shrink factor) until the gap becomes 1. Once the gap is 1, the algorithm functions like a traditional Bubble Sort.

        **Efficiency**: 
        - Comb Sort improves upon the inefficiency of Bubble Sort in cases where large jumps help to quickly move elements closer to their final positions. This results in fewer comparisons and swaps compared to the standard Bubble Sort.
        - However, in the worst case (when the list is almost sorted), Comb Sort still has a time complexity of \( O(n^2) \), but it performs better in practice than Bubble Sort.

        Comb Sort is simple and works best when the array is large enough and not nearly sorted, where the initial larger gaps can make a significant difference.
    `
},

shell_sort: {
    name: "Shell Sort",
    time_complexity: {
        best: ['O(n log n)', 'green-800'],
        average: ['O(n^1.5)', 'yellow-600'],
        worst: ['O(n^2)', 'red-500']
    },
    space_complexity: ['O(1)', 'yellow-600'],
    description: `
        Shell Sort is an in-place comparison-based sorting algorithm that generalizes Insertion Sort to allow the exchange of elements that are far apart. It works by starting with a large gap between the elements to be compared and gradually reducing the gap, performing a gapped insertion sort at each stage. This allows elements to be moved more efficiently toward their correct position, which makes Shell Sort faster than traditional Insertion Sort in many cases.

        The algorithm begins by sorting elements that are far apart, and as the gap is reduced, the algorithm behaves more like Insertion Sort, gradually making smaller and smaller adjustments to the array. The performance of Shell Sort depends on the gap sequence used. Common gap sequences include \( n/2, n/4, \dots, 1 \), but more advanced sequences can achieve better performance.

        **Efficiency**: 
        - Shell Sort significantly improves the efficiency of Insertion Sort by reducing the number of comparisons and shifts required. For large datasets, the gap reduction accelerates the sorting process.
        - In the worst case, when using a poor gap sequence (e.g., \( n/2, n/4, \dots \)), the time complexity can be \( O(n^2) \), but with optimal gap sequences, it can achieve much better performance, typically \( O(n \log n) \) or \( O(n^{1.5}) \).

        **Limitations**:
        - While Shell Sort performs better than simple algorithms like Bubble Sort or Insertion Sort, it can still be inefficient for large datasets when compared to algorithms like Quick Sort, Merge Sort, or Heap Sort. The choice of gap sequence plays a critical role in its performance.

        Shell Sort is best used for moderately sized arrays or lists where simplicity and in-place sorting are important. It’s an effective improvement over Insertion Sort, especially when the list is not already nearly sorted.
    `
},
gnome_sort: {
    name: "Gnome Sort",
    time_complexity: {
        best: ['O(n)', 'green-800'],
        average: ['O(n^2)', 'yellow-600'],
        worst: ['O(n^2)', 'red-500']
    },
    space_complexity: ['O(1)', 'yellow-600'],
    description: `
        Gnome Sort is a simple, comparison-based sorting algorithm that is similar to Insertion Sort but with a unique approach. It iterates through the array and compares adjacent elements. If two elements are in the wrong order, it swaps them and then moves one step back to ensure the array remains sorted. If no swap occurs, it moves one step forward.

        The algorithm works by iterating over the list and performing swaps until it finds that the array is sorted. When a swap is made, it backtracks one step to compare and swap elements again. This stepwise approach is the main distinguishing feature of Gnome Sort. It is conceptually simple and easy to implement, but it is inefficient for large datasets due to its quadratic time complexity.

        **Efficiency**:
        - Gnome Sort is inefficient for large arrays and is generally not recommended for practical use cases. It operates similarly to Insertion Sort but with extra backtracking. It works well in best-case scenarios (when the array is already sorted or nearly sorted), where its time complexity can be linear (O(n)).
        - In the average and worst cases, Gnome Sort requires multiple comparisons and backtracking, resulting in a time complexity of O(n²), which is typical of simple comparison-based algorithms like Bubble Sort.

        **Limitations**:
        - Gnome Sort is an educational algorithm and not suited for large datasets. It is inefficient compared to more advanced algorithms like Merge Sort, Quick Sort, or Heap Sort. Its backtracking nature leads to an excessive number of comparisons and swaps, especially in unsorted arrays.
        - While easy to understand and implement, Gnome Sort doesn't scale well, making it impractical for real-world large datasets.

        Gnome Sort is best suited for small arrays where simplicity and ease of implementation are important. It’s a great way to illustrate the idea of sorting algorithms and understand the challenges faced when designing efficient sorting algorithms.
    `
},

bogo_sort: {
    name: "Bogo Sort",
    time_complexity: {
        best: ['O(n)', 'green-800'],
        average: ['O((n+1)!)', 'yellow-600'],
        worst: ['O((n+1)!)', 'red-500']
    },
    space_complexity: ['O(n)', 'yellow-600'],
    description: `
        Bogo Sort, also known as "stupid sort," is an extremely inefficient sorting algorithm based on random shuffling. It works by checking if the array is sorted, and if it is not, it randomly permutes the array and checks again. This process continues until the array happens to be sorted.

        The algorithm is often used as an example of how not to sort data. Bogo Sort relies purely on chance, making its time complexity highly unpredictable and unbounded. While the algorithm is conceptually simple, it is not suitable for practical use and performs extremely poorly, especially for larger datasets.

        **Efficiency**:
        - Bogo Sort has an average and worst-case time complexity of \(O((n+1)!)\), which means that as the size of the array increases, the number of operations grows factorially. This is because in the worst case, Bogo Sort may need to randomly shuffle the entire array repeatedly until it happens to be sorted.
        - The best case occurs when the array is already sorted, which takes \(O(n)\) time, but this is a highly unlikely scenario in most cases.

        **Limitations**:
        - Bogo Sort is a purely educational or humorous algorithm and should never be used in real-world applications. It is impractical for sorting anything larger than a trivially small array due to its catastrophic inefficiency.
        - The random nature of the algorithm means that, even for small arrays, it can take an unreasonable amount of time to complete. Its factorial time complexity makes it one of the slowest sorting algorithms, even worse than simple algorithms like Bubble Sort or Insertion Sort.

        **Conclusion**:
        - Bogo Sort is a fun and theoretical example that highlights the importance of designing efficient algorithms. While it may be amusing in small-scale educational settings, it should be avoided for any practical sorting task. For real-world applications, much more efficient algorithms like Quick Sort, Merge Sort, or Heap Sort should be used.
    `
}




}

export default algorithmInfos