import axios from "axios";

export default function POST(endpoint, body) {
  return axios.post("/api" + endpoint, body, { withCredentials: true });
}
