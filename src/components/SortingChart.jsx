import { useContext, useEffect, useState } from "react";
import { SortingContext } from "../contexts/SortingContext";
import algorithmInfos from "../data/algorithmInfos";

function SortingChart() {
  const {
    sortingState,
    generateSortingArray,
    startVisualizing,
    changeSortingSpeed,
    changeAlgorithm,
    setArray,
  } = useContext(SortingContext);

  const [inputValue, setInputValue] = useState("");
  const algorithms = Object.keys(algorithmInfos); // Array of algorithm keys
  const [currentAlgorithmIndex, setCurrentAlgorithmIndex] = useState(0);

  useEffect(() => {
    generateSortingArray();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleArraySubmit = () => {
    const values = inputValue.split(" ").map((val) => parseFloat(val));
    if (values.every((val) => !isNaN(val))) {
      const newArray = values.map((value) => ({ value, state: "idle" }));
      setArray(newArray);
      setInputValue("");
    } else {
      alert("Please enter a valid array of numbers separated by spaces.");
    }
  };

  // Handle algorithm change from dropdown
  const handleAlgorithmChange = (e) => {
    const selectedAlgorithmIndex = e.target.value;
    setCurrentAlgorithmIndex(selectedAlgorithmIndex);
    changeAlgorithm(algorithms[selectedAlgorithmIndex]);
  };

  // Find the maximum value in the array to scale bar heights
  const maxValue = Math.max(...sortingState.array.map((b) => b.value)) || 1;

  return (
    <div className="flex flex-col min-h-screen text-purple-100 sort-visualizer">
      <div className="container mx-auto mt-8 flex flex-col items-center px-4 sort-visualizer__content">
        <div className="flex items-center justify-center gap-3 mb-6 sort-visualizer__algorithm-dropdown">
          {/* Dropdown to select sorting algorithm */}
          <select
            value={currentAlgorithmIndex}
            onChange={handleAlgorithmChange}
            className="px-5 py-3 bg-purple-500 text-purple-100 rounded-full shadow-inner transition-all cursor-pointer"
          >
            {algorithms.map((algorithm, index) => (
              <option key={index} value={index}>
                {algorithmInfos[algorithm].name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-center mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter space-separated numbers"
            className="border border-purple-700 bg-purple-900 text-purple-100 px-4 py-2 rounded-md mb-4"
          />
          <button
            onClick={handleArraySubmit}
            className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-purple-100 transition-colors rounded-full shadow-md"
          >
            Set Array
          </button>
        </div>

        <div className="max-w-3xl w-full bg-purple-950 rounded-lg shadow-xl p-6 sort-visualizer__chart-container">
          <div className="mb-4 sort-visualizer__chart">
            <div className="sort-visualizer__chart-base"></div>
            {sortingState.array.map((bar, i) => (
              <div key={i} className="sort-visualizer__bar-container">
                <p
                  className={`text-center mb-2 ${
                    bar.state === "idle" ? "text-purple-200" : "text-purple-100"
                  } sort-visualizer__bar-value`}
                >
                  {bar.value}
                </p>
                <div
                  className={`sort-visualizer__bar sort-visualizer__bar--${bar.state}`}
                  style={{
                    height: `${(bar.value / maxValue) * 100}%`,
                  }}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 max-w-3xl mb-8 sort-visualizer__controls">
            <button
              disabled={sortingState.sorting}
              onClick={startVisualizing}
              className="px-6 py-3 text-purple-100 disabled:opacity-50 rounded-full sort-visualizer__start-button"
            >
              Start
            </button>
            <button
              disabled={sortingState.sorting}
              onClick={() => generateSortingArray()}
              className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-purple-100 disabled:opacity-50 transition-colors rounded-full shadow-md sort-visualizer__new-array-button"
            >
              New Array
            </button>
            <select
              disabled={sortingState.sorting}
              onChange={changeSortingSpeed}
              defaultValue="slow"
              className="ml-auto bg-purple-700 px-4 py-2 rounded-full cursor-pointer outline-none focus:ring ring-purple-400 disabled:opacity-50 disabled:cursor-default text-purple-100 sort-visualizer__speed-select"
            >
              <option value="slow">Slow</option>
              <option value="normal">Normal</option>
              <option value="fast">Fast</option>
            </select>
          </div>

          <div className="w-full h-0.5 bg-purple-700 mb-6 sort-visualizer__divider" />
        </div>
      </div>
    </div>
  );
}

export default SortingChart;
