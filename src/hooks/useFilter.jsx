import { useEffect, useState } from "react";

export default function useFilter(data, filter, filterFunction, timer = 800) {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      const result = filter == "" ? data : filterFunction(data, filter);
      setFilteredData(result);
    }, timer);

    return () => clearTimeout(timeOut);
  }, [data, filter]);

  return filteredData;
}
