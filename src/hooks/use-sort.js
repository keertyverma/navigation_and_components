import { useState } from "react";

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    // Reset sorting order back to ascending order when we go from one header to another
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    // sorting cycle = unsorted -> ascending order -> descending order -> unsorted
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;
  if (sortOrder && sortBy) {
    // get sortValue function for column
    const { sortValue } = config.find((column) => column.label === sortBy);

    // Make copy of data and sort data based on column
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      }
      return (valueA - valueB) * reverseOrder;
    });
  }

  return {
    sortBy,
    sortOrder,
    setSortColumn,
    sortedData,
  };
}

export default useSort;
