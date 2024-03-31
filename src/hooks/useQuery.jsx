import { useState } from "react";
import POST from "../utils/POST";
import GET from "@/utils/GET";

export default function useQuery(endpoint, method = "GET") {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (body) => {
    try {
      setLoading(true);
      setError(null);
      let response;

      if (method === "GET") {
        response = await GET(endpoint);
      } else if (method === "POST") {
        response = await POST(endpoint, body);
      }

      setData(response.data);
      return response.data;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [fetchData, data, loading, error];
}
