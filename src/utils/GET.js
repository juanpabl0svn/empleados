import axios from "axios";

export default function GET(endpoint) {
  return axios.get("/api" + endpoint, { withCredentials: true });
}
