## Group Project(Course CS506 - DATA STRUCTURES AND ALGORITHM)Total Members: 4
- My role is to create a user input form where user can enter number, also created dropdown to select different algorithms, and manage their speed.
- I also implemented Merge Sort, BOGO Sort, Bubble Sort algorithms.
# 🔢 Sorting Algorithm Visualizer

Welcome to the **Sorting Algorithm Visualizer** – a fun and interactive **React-based web app** that helps users **understand and compare different sorting algorithms**. Watch the algorithms sort data in real time, control the speed, and learn how each one works with simple explanations.

---

## 🚀 Features

- 🔄 **Live Visualization** — Real-time bar animations showing each step of the sorting process.
- 🧠 **Simple Explanations** — Easy-to-understand info boxes describing each algorithm.
- 🔍 **Algorithm Comparison** — See and compare the **time and space complexity** of all supported algorithms.
- 🎮 **Custom Input** — Users can enter their own array to sort.
- ⏱️ **Speed Control** — Choose from **Slow**, **Normal**, or **Fast** modes.
- 📏 **Magnitude Visualization** — Height of each bar represents the numerical value of the element.

---

## 📚 Supported Sorting Algorithms

- 🫧 Bubble Sort  
- 📌 Insertion Sort  
- 🔎 Selection Sort  
- 🧩 Merge Sort  
- ⚡ Quick Sort  
- 🏗️ Heap Sort  
- 🧮 Counting Sort  
- 📊 Radix Sort  
- 🧼 Comb Sort  
- 🐚 Shell Sort  
- 🧙 Gnome Sort  
- 🤪 Bogo Sort  

---

## 🧪 Algorithm Comparison Table

| Algorithm      | Best Time | Average Time | Worst Time | Space Complexity | Stable |
|----------------|-----------|--------------|------------|------------------|--------|
| 🫧 **Bubble Sort**   | O(n)      | O(n²)        | O(n²)      | O(1)             | ✅     |
| 📌 **Insertion Sort**| O(n)      | O(n²)        | O(n²)      | O(1)             | ✅     |
| 🔎 **Selection Sort**| O(n²)     | O(n²)        | O(n²)      | O(1)             | ❌     |
| 🧩 **Merge Sort**    | O(n log n)| O(n log n)   | O(n log n) | O(n)             | ✅     |
| ⚡ **Quick Sort**    | O(n log n)| O(n log n)   | O(n²)      | O(log n)         | ❌     |
| 🏗️ **Heap Sort**     | O(n log n)| O(n log n)   | O(n log n) | O(1)             | ❌     |
| 🧮 **Counting Sort** | O(n + k)  | O(n + k)     | O(n + k)   | O(k)             | ✅     |
| 📊 **Radix Sort**    | O(nk)     | O(nk)        | O(nk)      | O(n + k)         | ✅     |
| 🧼 **Comb Sort**     | O(n log n)| O(n²)        | O(n²)      | O(1)             | ❌     |
| 🐚 **Shell Sort**    | O(n log n)| O(n^1.5)     | O(n²)      | O(1)             | ❌     |
| 🧙 **Gnome Sort**    | O(n)      | O(n²)        | O(n²)      | O(1)             | ✅     |
| 🤪 **Bogo Sort**     | O(n)      | O((n+1)!)    | O((n+1)!)  | O(n)             | ❌     |

---

## 💡 Algorithm Descriptions

### 🫧 Bubble Sort
Simple comparison-based algorithm that repeatedly swaps adjacent elements if they are in the wrong order.

- **Best:** O(n)  
- **Average:** O(n²)  
- **Worst:** O(n²)  
- **Space:** O(1)

---

### ⚡ Quick Sort
Efficient divide-and-conquer algorithm. Picks a pivot, partitions around it, and sorts recursively.

- **Best:** O(n log n)  
- **Average:** O(n log n)  
- **Worst:** O(n²)  
- **Space:** O(log n)

---

### 🧩 Merge Sort
Divide-and-conquer sorting algorithm. Splits array, sorts, and merges.

- **Best / Avg / Worst:** O(n log n)  
- **Space:** O(n)

---

### 📌 Insertion Sort
Builds a sorted array one element at a time.

- **Best:** O(n)  
- **Average:** O(n²)  
- **Worst:** O(n²)  
- **Space:** O(1)

---

### 🔎 Selection Sort
Finds the minimum in unsorted part and places it at the beginning.

- **All Cases:** O(n²)  
- **Space:** O(1)

---

### 🏗️ Heap Sort
Uses a max heap to sort the array.

- **Best / Avg / Worst:** O(n log n)  
- **Space:** O(1)

---

### 📊 Radix Sort
Non-comparative, groups and sorts digits by place value.

- **All Cases:** O(nk)  
- **Space:** O(n + k)

---

### 🧮 Counting Sort
Counts occurrences of elements and uses it to position items.

- **All Cases:** O(n + k)  
- **Space:** O(k)

---

### 🧼 Comb Sort
Improved Bubble Sort using gaps to speed up the sorting process.

- **Best:** O(n log n)  
- **Average / Worst:** O(n²)  
- **Space:** O(1)

---

### 🐚 Shell Sort
Generalized Insertion Sort with gap-based comparisons.

- **Best:** O(n log n)  
- **Average:** O(n^1.5)  
- **Worst:** O(n²)  
- **Space:** O(1)

---

### 🧙 Gnome Sort
Like Insertion Sort but with swaps and steps back.

- **Best:** O(n)  
- **Average / Worst:** O(n²)  
- **Space:** O(1)

---

### 🤪 Bogo Sort
Randomly shuffles until the array is sorted (for fun only).

- **Best:** O(n)  
- **Avg / Worst:** O((n+1)!)  
- **Space:** O(n)

---

## ⚙️ Getting Started

### 🔧 Prerequisites

Make sure you have the following installed:

- 📦 [Node.js](https://nodejs.org/) (v14 or newer recommended)
- ⚛️ [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

---

### 📦 Installation & Run

Follow these steps to set up the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/sorting-algorithm-visualizer.git

# 2. Navigate into the project directory
cd sorting-algorithm-visualizer

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
