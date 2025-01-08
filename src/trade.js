import {SolanaAgentKit} from "solana-agent-kit";
import { PublicKey } from "@solana/web3.js";

const rpcUrl = 'https://api.devnet.solana.com';

const feePayerAddress = '';
const feePayerPrivateKey = '';



const ownerAddress = '';
const ownerPrivateKey = '';



// Initialize with private key and optional RPC URL
const agent = new SolanaAgentKit(
    feePayerPrivateKey,
    rpcUrl,
    "your-openai-api-key"
);


const result = await agent.trade(
    new PublicKey(''),
    1, // amount
    new PublicKey(''),
    300 // 3% slippage
)

console.log("Token Mint Address:", result);

