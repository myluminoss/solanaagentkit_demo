import {SolanaAgentKit} from "solana-agent-kit";
import {mainPrivateKey, rpcUrl} from "./config.js";

// Initialize with private key and optional RPC URL
const client = new SolanaAgentKit(
    mainPrivateKey,
    rpcUrl,
    "your-openai-api-key"
);

export default client;

