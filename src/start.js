import { SolanaAgentKit, createSolanaTools } from "solana-agent-kit";


const rpcUrl = 'https://api.devnet.solana.com';

const feePayerAddress = '';
const feePayerPrivateKey = '';


// Initialize with private key and optional RPC URL
const agent = new SolanaAgentKit(
    feePayerPrivateKey,
    rpcUrl,
    "your-openai-api-key"
);

// Create LangChain tools
const tools = createSolanaTools(agent);
console.log(tools)
