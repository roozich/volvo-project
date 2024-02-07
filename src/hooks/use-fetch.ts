import React, { useEffect, useState } from "react";
import Cars from "../models/cars";

const useFetch = (url = "/api/cars.json") => {
  const [data, setData] = useState<Cars[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "error">("idle");

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`An error occurred while fetching the data: ${response.status} ${response.statusText}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
        setStatus("loaded");
      } catch (err) {
        if (err instanceof Error) {
          setStatus("error");
          setError(err.message);
        }
      }
    };
    fetchData();
  }, [url]);

  return {
    data,
    isLoading: status === "loading",
    isError: status === "error",
    error,
  };
};

export default useFetch;
