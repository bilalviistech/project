import io from "socket.io-client";
import { baseUrl } from "@/constants/data";
const socket = io(baseUrl || "https://server.rezify.com", {
  autoConnect: false,
});

export default socket;
