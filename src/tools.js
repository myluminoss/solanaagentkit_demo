import { createSolanaTools } from "solana-agent-kit";
import client from "./client.js";

// Create LangChain tools
const tools = createSolanaTools(client);
console.log(tools)
